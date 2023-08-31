"use client"

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
});

export default function ApolloClientProvider({children}){
  return <ApolloClientProvider client>{children}</ApolloClientProvider>
}