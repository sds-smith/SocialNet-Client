import { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserContext } from '../../context/user-context';
import { classes } from '../../styles.classes';
import { signInWithGooglePopup, signOutUser } from '../../utils/firebase/firebase.utils';

export default function NavBar({ user, onLogout }) {
  const { authenticatedUser, setUser, logoutUser, authUserExists } = useContext(UserContext);

  useEffect(() => {console.log(authenticatedUser)},[authenticatedUser])

  const authAction = async () => {
    if (authUserExists) {
      await signOutUser() 
      logoutUser();
    } else {
      const { user } = await signInWithGooglePopup();
      setUser(user);
    }
  }
  return (
    <Box sx={classes.navContainer}>
      <Grid container>
        <Grid container item xs={8}>
          <Grid item xs={2}>
            <Typography variant='h4' component='h1' >
              CUP
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant='h6' component='h4' >
              A Social App for Coffee Lovers
            </Typography>
          </Grid>
        </Grid>
        {Boolean(user) ? (
          <Grid item xs={4}>
            <Button variant='contained'  onClick={onLogout}>
              Logout
            </Button >
          </Grid>
        ) : (
          <Button variant='contained'  onClick={authAction}>
            {authUserExists ? 'GOOGLE LOGOUT' : 'GOOGLE LOGIN'}
          </Button >
        )}
      </Grid>
    </Box>
  );
};