import { gql } from "@apollo/client";

const coffeeDetailFragment = gql`
  fragment CoffeeDetail on Coffee {
    description
    label
    roast
    roaster
    singleOrigin
    origin
    process
    tastingNotes
  }
`;

const messageDetailFragment = gql`
  fragment MessageDetail on Message {
    id
    user
    text
  }
`

export const messagesQuery = gql`
  query {
    messages {
      ...MessageDetail,
      createdAt
    }
  }
  ${messageDetailFragment}
`;

export const checkinsQuery = gql`
  query Checkins {
    checkins {
      user
      userNotes
      imageUrl
      coffee {
        ...CoffeeDetail
      }
    }
  }
  ${coffeeDetailFragment}
`;

export const addMessageMutation = gql`
  mutation AddMessageMutation($text: String!) {
    message: addMessage(text: $text) {
      ...MessageDetail
    }
  }
  ${messageDetailFragment}
`;

export const addCheckinMutation = gql`
  mutation AddCheckinMutation($input: CheckinInput!) {
    checkin: addCheckin(input: $input) {
      id
      user
      coffee {
        ...CoffeeDetail
      }
      imageUrl
      userNotes
      createdAt
    }
  }
  ${coffeeDetailFragment}
`;

export const messageAddedSubscription = gql`
  subscription MessageAddedSubscription {
    message: messageAdded {
      ...MessageDetail
    }
  }
  ${messageDetailFragment}
`;

export const checkinAddedSubscription = gql`
  subscription CheckinAddedSubscription {
    checkin: checkinAdded {
      id
      user
      coffee {
        ...CoffeeDetail
      }
      imageUrl
      userNotes
      createdAt
    }
  }
  ${coffeeDetailFragment}
`;