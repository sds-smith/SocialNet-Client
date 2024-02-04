import React from 'react'
import Grid from '@mui/material/Grid';
import CheckInCard from './CheckInCard';
import Sidebar from './Sidebar';
import { useCheckins } from '../../utils/hooks/apollo.hooks';
import { classes } from '../../styles.classes';

export default function CheckInFeed() {

  const { checkins } = useCheckins();

  return (
    <>
      <Grid item xs={12}  lg={8} sx={classes.feedSection}>
        { checkins.map(checkin => (
            <Grid item xs={12} lg={7}>
             <CheckInCard key={checkin.id} checkin={checkin}/>
            </Grid>
          ))
        }
      </Grid >
      <Grid item xs={0} lg={4} sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <Sidebar />
      </Grid>
    </>

  )
}
