import { useGreeting } from '../utils/hooks/apollo.hooks';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function Chat({ user }) {

    const greeting = useGreeting();

    return (
        <>
            <div>{`${user} ${greeting}` || 'Chat'}</div>
            <section className="section">
              <div className="container">
                <h1 className="title is-4">
                  {`Chatting as ${user}`}
                </h1>
                <MessageList user={user}/>
                <MessageInput />
              </div>
            </section>
        </>
    )
}
