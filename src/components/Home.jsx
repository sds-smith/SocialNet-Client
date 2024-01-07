import Grid from '@mui/material/Grid';
import Chat from "./Chat";

export default function Home({user}) {
  return (
    <Grid container>
      <Chat user={user} />
    </Grid>
  )
}
