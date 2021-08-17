import React from "react"
import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import {Link} from "gatsby";
import { graphql } from 'gatsby'

export default function Home({ data }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';


  return (
    <Flex direction="column" justifyContent="space-evenly" >

      <Text mb={10} fontSize="x-large" fontWeight="extrabold">HRMS Documentation</Text>

      <Text mb={10} width="60%"  color="#85848B" fontWeight="medium" fontSize="medium">Welcome to the HRMS Developer Documentation where you’ll learn how to build amazing HRMS experiences with the Payroll API.</Text>
      <Text mb={10} fontSize="x-large" fontWeight="extrabold">Quick start</Text>


      <Grid templateColumns="repeat(2,2fr)" gap="6"  width="70%">
        <Flex borderRadius="10px"  as={Link} to="/guide/getstarted/"
          boxShadow="md"
          direction="column"
          justifyContent="space-evenly"

          // bgGradient={`linear(to-bl, #27BC48, ${bg1},${bg1},${bg1})`}
          style={{
            border: "2px solid #E9F1FB",
          }} w="100%" h="150px" p="3" transition="all .5s ease-out" _hover={{
             transform: 'scale(0.9)',

           
          }} >

        <Text color="#09a5db" fontSize="medium" fontWeight="bold">
          
          Get Started
        
        
          
          </Text>

        <Text color="#85848B" fontWeight="medium" fontSize="sm">Set up your local environment to run Payroll client.</Text>
        </Flex>
        <Flex borderRadius="10px"
        as={Link} to="/guide/projectstructure/"
          boxShadow="md"
          direction="column"
          justifyContent="space-evenly"

          // bgGradient={`linear(to-bl, #27BC48, ${bg1},${bg1},${bg1})`} projectstructure
          style={{
            border: "2px solid #E9F1FB",
          }} w="100%" h="150px" p="3" transition="all .5s ease-out" _hover={{
             transform: 'scale(0.9)',

           
          }} >

        <Text color="#09a5db" fontSize="medium" fontWeight="bold">Payroll Structure</Text>

        <Text color="#85848B" fontWeight="medium" fontSize="sm">Payroll Client Architecture ,includes api,folder and file structure</Text>
        </Flex>
        <Flex borderRadius="10px"  as={Link} to="/guide/cicd/"
          boxShadow="md"
          direction="column"
          justifyContent="space-evenly"

          // bgGradient={`linear(to-bl, #27BC48, ${bg1},${bg1},${bg1})`}
          style={{
            border: "2px solid #E9F1FB",
          }} w="100%" h="150px" p="3" transition="all .5s ease-out" _hover={{
             transform: 'scale(0.9)',

           
          }} >

        <Text color="#09a5db" fontSize="medium" fontWeight="bold">CI/CD</Text>

        <Text color="#85848B" fontWeight="medium" fontSize="sm">HRM deployement pipeline .</Text>
        


        </Flex>
        <Box borderRadius="10px"
          boxShadow="md"

          // bgGradient={`linear(to-bl, #27BC48, ${bg1},${bg1},${bg1})`}
          style={{
            border: "2px solid #E9F1FB",
          }} w="100%" h="150px" p="3" transition="all .5s ease-out"  >

          Coming Soon


          
        </Box>

      </Grid>


      {/* <ul>
      {
        data.allMdx.nodes.map(node => (
          <li key={node.id}>
            {node.frontmatter.title}
          </li>
        ))
      }
      </ul> */}
    </Flex>
  )
}


// export const query = graphql`
//   query {
//     allMdx {
//       nodes {
//         id
//         slug
//         frontmatter {
//           title
//         }
//       }
//     }
//   }
// `
