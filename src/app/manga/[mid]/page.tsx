"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Spinner, Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Carousel from '@/app/Components/Carousel';
import { MangaDetail } from '@/app/utils/fetching';
import type {Metadata} from  "next"

interface IProps {
  params: {
    mid: string;
  };
}

export const metadata:Metadata =  {
  title: `hello`
}

const Mangas: React.FC<IProps> = ({ params }) => {
  const router = useRouter();
  const { data, error, isFetching, isLoading } = useQuery(['results', params.mid], () => MangaDetail(params.mid));
  const datas: string[] = data?.map((res) => res.img) || [];

  
  return (
    <Flex w="100%" h="100vh">
      <IconButton aria-label="Arrow" onClick={() => router.back()}>
        <ArrowBackIcon />
      </IconButton>
      {error ? (
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
          />
        </Alert>
      ) : isLoading || isFetching ? (
        <Flex align="center" m="auto">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : data ? (
        <Flex direction="column" align="baseline" m="auto">
          <Carousel img={datas} page="h" />
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Mangas;
