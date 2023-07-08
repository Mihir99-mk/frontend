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
      backgroundColor={"blackAlpha.900"}
      justify={"space-around"}
      align={"center"}
      
    >
    <Text color={"#DDE6ED"}
      fontSize={"xl"} fontWeight={"bold"}>Logo</Text>
    <Flex w={"xl"} justifyContent={"space-around"} color={"#DDE6ED"} fontSize={"16px"} fontWeight={"semibold"}>
    

            <Link
              href={"movie"}
              _hover={{
                textDecoration: "none",
                color: "#27374D"
              }}
            >
              Movies
            </Link>
            <Link
              href={"series"}
              _hover={{
                textDecoration: "none",
                color: "#27374D"
              }}
            >
              TV Series
            </Link>
            <Link
              href={"popular"}
              _hover={{
                textDecoration: "none",
                color: "#27374D"
              }}
            >
              Most Popular
            </Link>
           
      
    </Flex>
    </Flex>
  );
};

export default Navbar;