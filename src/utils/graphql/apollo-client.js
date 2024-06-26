import { ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';
import { createClient as createWsClient } from 'graphql-ws';
import { getAccessToken } from '../auth';

const BASE_URL = process.env.REACT_APP_BASE_HTTP_URL
const WS_URL = process.env.REACT_APP_BASE_WS_URL

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    operation.setContext({
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
  };
  return forward(operation);
});

const httpLink = concat(authLink, createHttpLink({ uri: `${BASE_URL}/v1` }));

const wsLink = new GraphQLWsLink(createWsClient({
  url: `${WS_URL}/v1`,
  connectionParams: () => ({ accessToken: getAccessToken() })
}))

export const apolloClient = new ApolloClient({
  link: split(isSubscription, wsLink, httpLink),
  cache: new InMemoryCache()
});

function isSubscription(operation) {
  const definition = getMainDefinition(operation.query);
  return definition.kind === Kind.OPERATION_DEFINITION
    && definition.operation === OperationTypeNode.SUBSCRIPTION;
}