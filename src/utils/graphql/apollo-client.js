import { ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';
// import { createClient as createWsClient } from 'graphql-ws';
import { getAccessToken } from '../auth';

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    operation.setContext({
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
  };
  return forward(operation);
});

const httpLink = concat(authLink, createHttpLink({ uri: 'http://localhost:80/graphql' }));

  export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
