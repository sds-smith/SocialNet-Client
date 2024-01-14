import { useEffect, useRef } from 'react';
import MessageRow from './MessageRow';
import { classes } from '../../styles.classes';

export default function MessageList({ user, messages }) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // scroll to bottom to make the last message visible
      container.scrollTo(0, container.scrollHeight);
    }
  }, [messages]);

  const messageType = {
    true: 'user',
    false: 'other'
  };

  return (
    <div 
      ref={containerRef} 
      style={classes.messageListContainer}
    >
      <table style={classes.messageList}>
        <tbody>
          {messages?.map((message) => (
            <MessageRow 
              key={message.id} 
              messageType={messageType[message.user === user]} 
              message={message} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};