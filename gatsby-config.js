module.exports = {
  siteMetadata: {
    title: 'Our House',
    description: 'A website with information for our house',
    author: 'Sean',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:100,300,400,700,900`],
      },
    },
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: `our_house`,
        collection: [`jobs`, `users`],
        server: { address: `ds041347.mlab.com`, port: `41347` },
        auth: { user: `ourHouse`, password: `ourHouse1` },
      },
    },
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },*/
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Our House',
        short_name: 'Us',
        start_url: '/',
        background_color: '#0D646A',
        theme_color: '#0D646A',
        display: 'minimal-ui',
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
