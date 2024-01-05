import { useQuery } from "@apollo/client";
import { greetingQuery, messagesQuery } from "../graphql/queries";

export function useGreeting() {
    const { data } = useQuery(greetingQuery);

    return data?.greeting;
}

export function useMessages() {
    const { data } = useQuery(messagesQuery);

    return data?.messages;
}