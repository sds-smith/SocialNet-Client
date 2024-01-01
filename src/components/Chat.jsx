import { useGreeting } from '../utils/hooks/apollo.hooks'

export default function Chat({ user, handleLogout }) {

    const greeting = useGreeting();

    return (
        <>
            <div>{`${user} ${greeting}` || 'Chat'}</div>
            <button onClick={handleLogout}>LOGOUT</button>
        </>
    )
}
