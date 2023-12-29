import { useQuery } from "@apollo/client";
import { greetingQuery } from "../graphql/queries";

export function useGreeting() {
    const { loading, error, data: { greeting } } = useQuery(greetingQuery);

    return greeting;
}