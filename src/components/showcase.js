/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import ShowcaseItem from './showcase-item';
import Pagination from './pagination';

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      allShowcase {
        nodes {
          avatar
          themeName
          winner
          name
          package
          demo
          screenshot
          repo
        }
      }
    }
  `);

  return (
    <section sx={{ my: '4' }}>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
          gridColumnGap: '5',
          gridRowGap: '3',
        }}
      >
        {data.allShowcase.nodes.map((item, index) => (
          <ShowcaseItem key={index} item={item} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default Showcase;
