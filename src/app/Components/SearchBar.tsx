"use client"
import { SearchIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Flex, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const SearchBar = () => {
  const [search, setSearch] = useState<string>("")

  const route = useRouter()
  const handleSubmit = () =>{
    route.push(`/${search}`)
    // console.log(search)
  }

  return (

    <Flex
    backgroundImage={"/images/3.jpg"}
  backgroundRepeat={"no-repeat"}
  backgroundSize={"cover"}
  opacity={"0.8"}
  w={"100%"}
  h={"100vh"}
  bgColor={"#27374D"}>
    <Flex align={"center"} mx={"auto"}>
  
      <InputGroup w={"xl"}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Mangas"
          color={"whiteAlpha.900"}
          px={"20px"}
        />
      </InputGroup>
  
      <ButtonGroup m={"16px"} bgColor={"blackAlpha.900"} borderRadius={"md"}>
        <Button
          onClick={handleSubmit}
          _hover={{
            bgColor: "blackAlpha.200",
            color: "white",
            borderRadius: "10px"
          }}
          type='button'
        >
          <SearchIcon color="white" />
        </Button>
      </ButtonGroup>
    </Flex>
  </Flex>

  )
}

export default SearchBar