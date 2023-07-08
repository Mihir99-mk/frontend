"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC<{}> = ({}) => {
  return (
    <Flex
      w={"100%"}
      h={"60px"}
      backgroundColor={"#526D82"}
      justify={"space-around"}
      align={"center"}
      
    >
    <Text color={"#DDE6ED"}
      fontSize={"xl"} fontWeight={"bold"}>Logo</Text>
    <Flex w={"xl"} justifyContent={"space-around"} color={"#DDE6ED"}>
      <Text>Home</Text>
      <Text>Movies</Text>
      <Text>TV Series</Text>
      <Text>Most Popular</Text>
      <Text>Category</Text>
    </Flex>
    </Flex>
  );
};

export default Navbar;


<Link
              href={"home"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Home
            </Link>