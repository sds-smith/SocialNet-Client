import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { classes } from '../styles.classes';

export default function NavBar({ user, onLogout }) {
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
        {Boolean(user) && (
          <Grid item xs={4}>
            <Button variant='contained'  onClick={onLogout}>
              Logout
            </Button >
          </Grid>
        )}
      </Grid>
    </Box>
  );
};