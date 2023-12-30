import { useQuery } from "@apollo/client";
import { greetingQuery } from "../graphql/queries";

export function useGreeting() {
    const { data } = useQuery(greetingQuery);

    return data?.greeting;
}