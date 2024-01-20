import { useContext } from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserContext } from '../../context/user-context';
import { classes } from '../../styles.classes';

function LoginForm() {
  const { authAction } = useContext(UserContext);

  return (
    <Grid container item xs={12}>
      <Paper sx={classes.paper} elevation={5}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h5' component='h2'>
              Login
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Button 
              onClick={authAction}
              variant='contained'
            >
              Google Login
            </Button>
          </Grid> 
        </Grid>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
