import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

  export const apolloClient = new ApolloClient({
    uri: 'http://localhost:80/graphql',
    cache: new InMemoryCache()
  });

export async function getGreeting() {
  const query = gql`
    query {
      greeting
    }
  `;
  const { data } = await apolloClient.query({query});
  console.log(data.greeting);
}