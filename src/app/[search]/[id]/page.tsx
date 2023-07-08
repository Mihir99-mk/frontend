"use client"
import { SearchInfo } from '@/app/utils/fetching';
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Spinner, Grid, GridItem, Card, CardBody, Stack, Heading, Divider, Box, Image,Text, useDisclosure, Select, Button } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';

interface IProps {
    params: {
      id: string;
    };
}


const SearchId:React.FC<IProps> = ({params}) => {
  const [cId, setCId] = useState('')

  const handleCId = () =>{
    
    router.push(`/manga/${cId}`)
    console.log(cId)
  }
    const { data, error, isFetching, isLoading } = useQuery({
        queryKey: ["results"],
        queryFn: () => SearchInfo(params.id),
      });
    
      
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  const router = useRouter()
  return (
    <Flex w={"100%"} h={"100vh"}>
        <IconButton aria-label='Arrow' onClick={()=>{router.back()}}>
        <ArrowBackIcon />
      </IconButton>
      {error ? (
        <>
          <Alert status="error">
            <AlertIcon />
            <Box>
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>Oh no, there was an error</AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        </>
      ) : isLoading || isFetching ? (
        <Flex align={"center"} m={"auto"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : data ? (
        <Flex h={"100vh"} w={'100%'} direction={"row"} align={"baseline"} m={"auto"}>
          <Stack px={"40"} py={"10"}>
          <Text fontWeight={"bold"} fontSize={"3xl"} fontFamily={"serif"} py={"3"}>{data.title}</Text>
          <Image src={data.image} alt={data.title} w={"400px"}/>
          <Grid templateColumns="repeat(3, 1fr)" gap={"4"} mt={"20px"}>
            
          {data.genres && data.genres.map((res)=>(
            <Box key={res} fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>{res}</Box>
          ))}
          </Grid>
          </Stack>
          <Stack spacing={3} >
            <Text fontWeight={"bold"} fontSize={"3xl"} fontFamily={"serif"} py={"3"}>Select chapters </Text>
            <Select placeholder='select' value={cId} onChange={(e)=>setCId(e.target.value)}>
              {data.chapters && data.chapters.map((res)=>(
                <option key={res.id} value={res.id}>{res.title}</option>
              ))}
            </Select>
              <Button onClick={handleCId}>Search</Button>
          </Stack>


          
        </Flex>
      ) : null}
    </Flex>
  )
}

export default SearchId