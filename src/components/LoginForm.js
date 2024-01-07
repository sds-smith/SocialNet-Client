import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { classes } from '../styles.classes';
import { login } from '../utils/auth';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(false);
    const user = await login(username, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

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
            <TextField 
              type="text" 
              required
              label='Username'
              value={username} 
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField 
              type="password" 
              required
              label='Password'
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
              {error && (
                <div >
                  <p >
                    Login failed
                  </p>
                </div>
              )}
          <Grid item xs={12} >
            <Button 
              onClick={handleLogin}
              variant='contained'
            >
              Login
            </Button>
          </Grid> 
        </Grid>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
