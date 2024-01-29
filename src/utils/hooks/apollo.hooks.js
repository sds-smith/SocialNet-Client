import { useLazyQuery, useQuery, useMutation, useSubscription } from "@apollo/client";
import { 
    messagesQuery, 
    addMessageMutation, 
    messageAddedSubscription,
    coffeesQuery,
    addCoffeeMutation,
    coffeeAddedSubscription,
    checkinsQuery,
    addCheckinMutation,
    checkinAddedSubscription,
    toastsQuery,
    addToastMutation,
    toastAddedSubscription,
    addCommentMutation
} from "../graphql/queries";

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

export function useCoffees() {
    const { data } = useQuery(coffeesQuery);
    useSubscription(coffeeAddedSubscription, {
        onData: ({ client, data }) => {
            const newCoffee = data.data.coffee;
            client.cache.updateQuery({ query: coffeesQuery }, ({ coffees }) => {
                return {coffees: [...coffees, newCoffee] };
            })
        }
    })

    return {
        coffees: data?.coffees || []
    }
}

export function useCheckins() {
    const { data } = useQuery(checkinsQuery);
    useSubscription(checkinAddedSubscription, {
        onData: ({ client, data }) => {
            const newCheckin = data.data.checkin;
            client.cache.updateQuery({ query: checkinsQuery }, ({ checkins }) => {
                return {checkins: [newCheckin, ...checkins] };
            })
        }
    })

    return {
        checkins: data?.checkins || [],
    }
}

export function useToasts(checkinId) {
    const { data } = useQuery(toastsQuery, {
        variables: { checkinId },
    });
    useSubscription(toastAddedSubscription, {
        variables: { checkinId },
        onData: ({ client, data }) => {
            const newToast = data.data.toastAdded;
            const { toasts } = client.readQuery({
                query: toastsQuery,
                variables: { checkinId },
            });
            client.writeQuery({
              query: toastsQuery,
              data: { toasts: [...toasts, newToast]},
              variables: { checkinId }
            });
        }
    })

    return {
        toasts: data?.toasts || []
    };
};

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

export function useAddCoffee() {
    const [mutate] = useMutation(addCoffeeMutation);

    const addCoffee = async (coffee) => {
        const coffeeToAdd = {
            label: coffee['Label'],
            roaster: coffee['Roaster'],
            origin: coffee['Origin'],
            roast: coffee['Roast'],
            process: coffee['Process'],
            tastingNotes: coffee['Tasting Notes'],
            description: coffee['Description'],
        }
        try {
            const { data } = await mutate({
                variables: { input: coffeeToAdd }
            });
            return data?.coffee
        } catch (err) {
            console.log(JSON.stringify(err, null, 2));
        }

    };

    return { addCoffee };
}

export function useAddToast() {
    const [mutate] = useMutation(addToastMutation);

    const addToast = async (checkinId) => {
        const { data } = await mutate({
            variables: { input: checkinId }
        });
        return data?.toast
    };

    return { addToast };
}

export function useAddComment() {
    const [mutate] = useMutation(addCommentMutation);

    const addComment = async (checkinId, comment) => {
        const { data } = await mutate({
            variables: { input: {checkinId, comment} }
        });
        return data?.comment
    };

    return { addComment };
}