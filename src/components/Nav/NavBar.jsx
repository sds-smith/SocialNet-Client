import { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserContext } from '../../context/user-context';
import { classes } from '../../styles.classes';

export default function NavBar() {
  const { logoutUser, authUserExists } = useContext(UserContext);

  return (
    <Box sx={classes.navContainer}>
      <Grid container>
        <Grid container item xs={9} lg={8}>
          <Grid item xs={12} lg={2}>
            <Typography variant={{xs: 'h6', lg:'h4'}} component='h1' >
              CUP
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant={{xs: 'body2', lg:'h6'}} component='h4' >
              A Social App for Coffee Lovers
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3} lg={4}>
          <Button variant='contained'  onClick={logoutUser} disabled={!authUserExists}>
            LOGOUT
          </Button >
        </Grid>
      </Grid>
    </Box>
  );
};