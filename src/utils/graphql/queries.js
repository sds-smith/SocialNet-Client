import { gql } from "@apollo/client";

const coffeeDetailFragment = gql`
  fragment CoffeeDetail on Coffee {
    id
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

export const coffeesQuery = gql`
  query Coffees {
      coffees {
        ...CoffeeDetail
    }
  }
  ${coffeeDetailFragment}
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

export const addUserMutation = gql`
  mutation AddUserMutation($input: UserInput!) {
    user: addUser(input: $input) {
      displayName
      email
      photoURL
      uid
    }
  }
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