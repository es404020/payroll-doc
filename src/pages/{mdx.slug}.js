import React , { useState, useEffect }from 'react'
import { graphql } from 'gatsby'
import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import { MDXRenderer } from 'gatsby-plugin-mdx'
const DetailsPage = ({ data }) => {

  
    return (
        <Flex alignItems="flex-start" direction="column" p={5} width="auto">


            {/* <Text fontSize="x-large" mb={5 } fontWeight="extrabold">{data.mdx}</Text> */}
            <MDXRenderer>

                {data.mdx.body}
            </MDXRenderer>
        </Flex>
    )
}



export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
       
      }
      
      body
    }
  }
`



export default DetailsPage
