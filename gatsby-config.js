

module.exports = {
  siteMetadata: {
    title: `HRMS Doc`,
  },
 
  plugins: [
    
    "@chakra-ui/gatsby-plugin",
 
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/component/layout`),
      },
    },

    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`pages`,
        path:`${__dirname}/src/pages`

      }
    },
    
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`doc`,
        path:`${__dirname}/src/doc`

      }
    },
    
    
    `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     {
      resolve: `gatsby-plugin-mdx`,
      options: {
        posts: require.resolve("./src/component/layout.js"),
        default: require.resolve("./src/component/layout.js"),
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
        
        ],
        display: 'swap'
      }
    },
   
    
  ],
}
