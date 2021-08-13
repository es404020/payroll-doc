import React from "react"
import {
  Flex,
  Text,
  useColorModeValue,
  Tooltip,
  Image,
  Spacer,
  WrapItem,
  InputRightElement,
  Heading,
  Progress,
  Center,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Grid,
  Select,
  Table,
  Circle,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  Square,
  position,
} from "@chakra-ui/react"
import Headers from "./header";
import Sidenav from "./sidenav";
import {Link, StaticQuery, graphql} from 'gatsby'
export default function Layout({ children }) {
  return (

    <StaticQuery
    query={graphql`query {
            site {
                siteMetadata {
                    title
                }
            }
        }`}
    render={data => (
      <>

      <Flex fontFamily="poppins" direction="column" display={["none", "none", "none", "block", "block"]}>
        <Headers title={data.site.siteMetadata.title} />
        
        <Flex width="full" px={5} position="absolute" top={10} left={0} width="full">

          <Sidenav />
          <Flex w="50%" pt="60px" minHeight="auto" ml="30%"  mr="15%" px={5} flexDirection="column" overflowY="auto" flex={1} overflowX="hidden" justifyContent="start" css={{
            '&::-webkit-scrollbar': {
              width: '0',

            },
            '&::-webkit-scrollbar-track': {

              display: "none"
            },
            '&::-webkit-scrollbar-thumb': {

              borderRadius: '0',

            },
          }} >
            {children}
          </Flex>


        </Flex>





      </Flex>

      <Flex w="100%" justifyContent="center" alignItems="center" display={["block", "block", "block", "none", "none"]}>


        <Center height="100vh" bg="#F3F8FB" >
          <Text fontWeight="semibold">Use on a Laptop only jo 🙏</Text>
        </Center>
      </Flex>
    </>
    )}
    />
   
  )
}
