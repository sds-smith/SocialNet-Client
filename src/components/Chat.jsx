import { useGreeting } from '../utils/hooks/apollo.hooks'

export default function Chat({ user }) {

    const greeting = useGreeting();

    return (
        <>
            <div>{`${user} ${greeting}` || 'Chat'}</div>
        </>
    )
}
