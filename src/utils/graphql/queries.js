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