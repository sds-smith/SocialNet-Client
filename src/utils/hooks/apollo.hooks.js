import { useQuery, useMutation } from "@apollo/client";
import { greetingQuery, messagesQuery, addMessageMutation } from "../graphql/queries";

export function useGreeting() {
    const { data } = useQuery(greetingQuery);

    return data?.greeting;
}

export function useMessages() {
    const { data } = useQuery(messagesQuery);

    return data?.messages;
}

export function useAddMessage() {
    const [mutate] = useMutation(addMessageMutation);

    const addMessage = async (text) => {
        const { data } = await mutate({
            variables: { text }
        });
        return data?.message
    };

    return { addMessage };
}