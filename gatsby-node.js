const parse = require('parse-github-repo-url');
const fetch = require('node-fetch');

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  if (node.internal.type !== 'Airtable' || node.queryName !== 'submissions') {
    return;
  }

  const parsed = parse(node.data.Repo);
  if (!parsed || !parsed[0] || !parsed[1]) {
    reporter.panic(`Invalid repo URL: ${node.data.Repo}`);
  }

  const [username, repo] = parsed;
  const ghData = await fetch(`https://api.github.com/users/${username}`).then(
    res => res.json(),
  );

  if (!ghData.avatar_url) {
    reporter.warn(`Missing avatar: ${node.data.Repo}`);
  }

  const data = {
    id: createNodeId(`Showcase-${node.id}`),
    name: node.data.Name,
    themeName: repo,
    avatar:
      ghData.avatar_url ||
      'https://themejam.gatsbyjs.org/images/default-avatar.jpg',
    repo: node.data.Repo,
    package: node.data.Package,
    demo: node.data.Demo,
    winner: false,
  };

  actions.createNode({
    ...data,
    parent: node.id,
    internal: {
      type: 'Showcase',
      contentDigest: createContentDigest(data),
    },
  });
};

exports.sourceNodes = ({ actions, schema }) => {
  actions.createTypes(
    schema.buildObjectType({
      name: 'Showcase',
      interfaces: ['Node'],
      fields: {
        id: { type: 'ID!' },
        name: { type: 'String!' },
        repo: { type: 'String!' },
        package: { type: 'String!' },
        demo: { type: 'String!' },
        avatar: { type: 'String!' },
        themeName: { type: 'String!' },
        winner: { type: 'Boolean!' },
        screenshot: {
          type: 'String!',
          resolve: (source, _args, context, info) => {
            const airtableNode = context.nodeModel.getNodeById({
              id: source.parent,
            });
            const screenshotNode = context.nodeModel.getNodeById({
              id: airtableNode.data.Screenshot___NODE,
            });

            return screenshotNode.raw[0].url;
          },
        },
      },
    }),
  );
};
