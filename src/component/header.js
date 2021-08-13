
import { Link } from "gatsby"
import React from 'react';

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
  Stack,
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

const Headers = ({title}) => {
    return (
      <Flex justifyContent="space-between" px={4} py={4} position="fixed" bg="#ffff" top={0} left={0} width="full"  zIndex={5} border="2px solid #EBF0F3">

        <Text fontWeight="bolder" fontSize="md">{title}</Text>
        <Stack spacing={4} direction="row" align="center">
  
  <Button colorScheme="teal" size="sm">
    Admin
  </Button>
  <Button bg="#09a5db" color="white" size="sm">
    User  
  </Button>
</Stack>
      </Flex>
    )
}

export default Headers
