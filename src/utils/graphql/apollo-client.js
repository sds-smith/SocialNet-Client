import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";
  import { greetingQuery } from "./queries";

  export const apolloClient = new ApolloClient({
    uri: 'http://localhost:80/graphql',
    cache: new InMemoryCache()
  });

export async function getGreeting() {
  const { data } = await apolloClient.query({query : greetingQuery});
  console.log(data.greeting);
}