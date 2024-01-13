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

export const checkinsQuery = gql`
  query Checkins {
    checkins {
      user
      userNotes
      imageUrl
      coffee {
        description
        label
        roast
        roaster
        singleOrigin
        origin
        process
        tastingNotes
      }
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

export const addCheckinMutation = gql`
  mutation AddCheckinMutation($input: CheckinInput!) {
    checkin: addCheckin(input: $input) {
      id
      user
      coffeeID
      imageUrl
      userNotes
      createdAt
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