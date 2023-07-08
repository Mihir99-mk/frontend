'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from 'react';



function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <CacheProvider>
      <ChakraProvider>
        <QueryClientProvider client={client}>
        {children}
        {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>

  );
}


export default Providers;
