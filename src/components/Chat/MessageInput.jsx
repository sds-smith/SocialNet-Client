import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function MessageInput({ onSend }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSend(event.target.value);
      event.target.value = '';
    }
  };

  return (
      <Grid item xs={12} >
        <TextField 
          fullWidth
          variant='filled'
          type="text" 
          label="Say something..."
          onKeyDown={handleKeyDown}
        />
      </Grid>
  );
}

export default MessageInput;
