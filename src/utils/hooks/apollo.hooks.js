import { useQuery, useMutation, useSubscription } from "@apollo/client";
import { 
    messagesQuery, 
    addMessageMutation, 
    messageAddedSubscription, 
    checkinsQuery,
    addCheckinMutation
} from "../graphql/queries";

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

export function useCheckins() {
    const { data } = useQuery(checkinsQuery);

    return {
        checkins: data?.checkins || []
    }
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

export function useAddCheckin() {
    const [mutate] = useMutation(addCheckinMutation);

    const addCheckin = async (checkIn) => {
        try {
            const { data } = await mutate({
                variables: { input: checkIn }
            });
            return data?.checkin
        } catch (err) {
            console.log(JSON.stringify(err, null, 2));
        }

    };

    return { addCheckin };
}