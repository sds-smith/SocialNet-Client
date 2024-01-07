import { useQuery, useMutation, useSubscription } from "@apollo/client";
import { greetingQuery, messagesQuery, addMessageMutation, messageAddedSubscription } from "../graphql/queries";

export function useGreeting() {
    const { data } = useQuery(greetingQuery);

    return data?.greeting;
}

export function useMessages() {
    const { data } = useQuery(messagesQuery);
    useSubscription(messageAddedSubscription, {
        onData: ({ client, data }) => {
            const newMessage = data.data.message;
            client.cache.updateQuery({ query: messagesQuery }, ({ messages }) => {
                return {messages: [...messages, newMessage] };
            })
        }
    })

    return {
        messages: data?.messages || [],
      };
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