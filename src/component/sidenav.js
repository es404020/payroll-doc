
import { Link } from "gatsby";

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
} from "@chakra-ui/react";

import React from 'react'
import {
    MdCheckCircle,
    MdDashboard,
    MdGroupWork,
    MdMenu,
    MdPlaylistAddCheck,
    MdGridOn,
    MdInsertLink,
    MdNotifications,
    MdPeople,
    MdPerson,
    MdReceipt,
    MdSend,
    MdSettings,
    MdShoppingBasket,
    MdShoppingCart,
    MdHome

} from "react-icons/md";

import { AiOutlineHome } from 'react-icons/ai'

const Sidenav = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    return (
        <Flex w="15%" pt="60px" position="fixed" left="0" bg="#FAFCFE" px={5} borderRight="2px solid #EBF0F3" h="100vh" direction="column" alignItems="stretch" >
            {/* <Flex w="35%" direction="row"  role="group" _hover={{ fontWeight: 'semibold' }} justifyContent="center" alignItems="center"  _groupHover={{ color: 'tomato' }}>
            <Icon color="#67686F" as={AiOutlineHome} h="24px" w="24px"  />
               
                <Spacer />
                <Text fontSize="large" fontWeight="semibold" color="#67686F">Home</Text>
            </Flex> */}
            <Flex height="50vh" >


            <List spacing={3} >
                <ListItem as={Link} mb={10} display="block" to={process.env.URL} activeStyle={{
                    color: "#09a5db"
                }} fontWeight="semibold" color="#67686F" _hover={{

                    color: "#0D0C11",
                    fontWeight: "bolder"
                }} >

                    <ListIcon as={AiOutlineHome} as={AiOutlineHome} h="24px" w="24px" />
                    Home
                </ListItem>


                <ListItem  mb={10}  display="block" as={Link} to= {process.env.URL+"about/"}  activeStyle={{
                    color: "#09a5db"
                }} fontWeight="semibold" color="#67686F" _hover={{

                    color: "#0D0C11",
                    fontWeight: "bolder"
                }} >

                    <ListIcon as={MdGroupWork} h="24px" w="24px" />
                    Component 
                </ListItem>
                <ListItem  mb={10}  display="block" as={Link}  activeStyle={{
                    color: "#09a5db"
                }} fontWeight="semibold" color="#67686F" _hover={{

                    color: "#0D0C11",
                    fontWeight: "bolder"
                }} >

                    <ListIcon as={MdPeople} h="24px" w="24px" />
                    Template
                </ListItem>
                <ListItem  mb={10}  display="block" as={Link}  activeStyle={{
                    color: "#09a5db"
                }} fontWeight="semibold" color="#67686F" _hover={{

                    color: "#0D0C11",
                    fontWeight: "bolder"
                }} >

                    <ListIcon as={MdGridOn} h="24px" w="24px" />
                    Utility
                </ListItem>
                <ListItem  mb={10}  display="block" as={Link}  activeStyle={{
                    color: "#09a5db"
                }} fontWeight="semibold" color="#67686F" _hover={{

                    color: "#0D0C11",
                    fontWeight: "bolder"
                }} >

                    <ListIcon as={MdNotifications} h="24px" w="24px" />
                    Notification
                </ListItem>

            </List>

            </Flex>
            
        </Flex>
    )
}

export default Sidenav
