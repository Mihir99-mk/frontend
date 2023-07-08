"use client";
import React from "react";
// import {useQuery} from 'react-query';
import { manga } from "../utils/fetching";
import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Spinner,
  Stack,
  useDisclosure,
  Text,
  Image,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

interface IProps {
  params: {
    search: string;
  };
}

const Search: React.FC<IProps> = ({ params }) => {
  const datas = params.search.replaceAll("%20", " ");
  
  const { data, error, isFetching, isLoading } = useQuery({
    queryKey: ["results"],
    queryFn: () => manga(datas),
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
        <Grid h="500px" templateColumns="repeat(4, 1fr)" gap={"4"}>
          {data.results && data.results.map((res) => (
            <GridItem key={res.id}>
              <Link href={`${params.search}/${res.id}`}>
              <Card maxW="sm">
                <CardBody>
                  <Image src={res.image} alt={res.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{res.title}</Heading>
                    <Text noOfLines={[1,3]}>{res.description}</Text>
                    {res.releaseDate ? <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      
                      Release Date - {res.releaseDate}
                    </Box>: <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      
                      Release Date - N/A
                    </Box>}
                    
                    {res.contentRating ? <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      Content Rating - {res.contentRating}
                    </Box>: <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      Content Rating - N/A
                    </Box>}
                    
                    {res.lastVolume ? <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      Last Volume - {res.lastVolume}
                    </Box>: <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      Last Volume -  N/A
                    </Box>}
                    
                    {res.lastChapter ? <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      Last Chapter - {res.lastChapter}
                    </Box>: <Box fontSize={"small"} w={"130px"} textAlign={"center"} borderRadius={"4px"} bgColor={"blackAlpha.900"} color={"white"} p={"4px"}>
                      Last Chapter -  N/A
                    </Box>}
                    
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              </Link>
            </GridItem>
          ))}
        </Grid>
      ) : null}
    </Flex>
  );
};

export default Search;
