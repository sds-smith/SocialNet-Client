import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar({ user, onLogout }) {
  return (
    <Box >
      <Grid container>
        <Grid item xs={4}>
          <Typography variant='h4' component='h1' >
            GraphQL Chat
          </Typography>
        </Grid>


        {Boolean(user) && (
          <Grid item xs={8}>
            <Button variant='contained'  onClick={onLogout}>
              Logout
            </Button >
          </Grid>
        )}
      </Grid>
    </Box>
  );
};