import { useMessages } from '../utils/hooks/apollo.hooks';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function Chat({ user }) {

  const messages = useMessages();

  return (
    <section >
      <h1 >
        {`Chatting as ${user}`}
      </h1>
      <MessageList 
        user={user} 
        messages={messages}
      />
      <MessageInput />
    </section>
  )
}
