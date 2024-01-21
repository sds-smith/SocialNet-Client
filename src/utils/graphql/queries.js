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
`;

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
        ...CoffeeDetail,
        id
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
        ...CoffeeDetail,
        id
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
        ...CoffeeDetail,
        id
      }
      imageUrl
      userNotes
      createdAt
    }
  }
  ${coffeeDetailFragment}
`;

export const addCoffeeMutation = gql`
  mutation AddCoffeeMutation($input: CoffeeInput!) {
    coffee: addCoffee(input: $input) {
      ...CoffeeDetail
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
        ...CoffeeDetail,
        id
      }
      imageUrl
      userNotes
      createdAt
    }
  }
  ${coffeeDetailFragment}
`;

export const coffeeAddedSubscription = gql`
  subscription CoffeeAddedSubscription {
    coffee: coffeeAdded {
        ...CoffeeDetail,
        id
    }
  }
  ${coffeeDetailFragment}
`;