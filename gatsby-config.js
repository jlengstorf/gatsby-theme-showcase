require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: 'appiLjgqHaXNtHx0x',
            tableName: 'themes',
            tableView: 'Submissions',
            queryName: 'submissions',
            mapping: {
              ['Screenshot']: 'fieldNode',
            },
          },
        ],
      },
    },
  ],
};
