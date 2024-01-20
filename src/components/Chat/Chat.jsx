import { useContext } from 'react';
import { useMessages, useAddMessage } from '../../utils/hooks/apollo.hooks';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { UserContext } from '../../context/user-context';
import { classes } from '../../styles.classes';

export default function Chat({ user }) {
  const {authenticatedUser} = useContext(UserContext);

  const { messages } = useMessages();
  const { addMessage } = useAddMessage();

  const handleSend = async (text) => {
    const message = await addMessage(text);
    console.log('Message added:', message)
  };

  return (
    <Grid container item xs={8}>
      <Paper sx={classes.paper} elevation={5}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h2' >
            {`Chatting as ${authenticatedUser.displayName}`}
          </Typography >
        </Grid>
        <Grid item xs={12} sx={classes.chatGrid}>
          <MessageList 
            messages={messages}
          />
        </Grid>
        <Grid item xs={12}>
          <MessageInput onSend={handleSend} />
        </Grid>
      </Paper>
    </Grid>
  )
}
