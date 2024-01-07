import { gql } from "@apollo/client";

export const greetingQuery = gql`
  query {
    greeting
  }
`;

export const messagesQuery = gql`
  query {
    messages {
      id
      user
      text
      createdAt
    }
  }
`;

export const addMessageMutation = gql`
  mutation AddMessageMutation($text: String!) {
    message: addMessage(text: $text) {
      id
      user
      text
    }
  }
`;

export const messageAddedSubscription = gql`
  subscription MessageAddedSubscription {
    message: messageAdded {
      id
      user
      text
    }
  }
`;