import { useMessages, useAddMessage } from '../utils/hooks/apollo.hooks';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function Chat({ user }) {

  const { messages } = useMessages();
  const { addMessage } = useAddMessage();

  const handleSend = async (text) => {
    const message = await addMessage(text);
    console.log('Message added:', message)
  };

  return (
    <section >
      <h1 >
        {`Chatting as ${user}`}
      </h1>
      <MessageList 
        user={user} 
        messages={messages}
      />
      <MessageInput onSend={handleSend} />
    </section>
  )
}
