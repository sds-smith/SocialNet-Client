import { gql } from "@apollo/client";

export const greetingQuery = gql`
  query {
    greeting
  }
`;
