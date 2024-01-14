import React from 'react'
import Grid from '@mui/material/Grid';
import CheckInCard from './CheckInCard';
import Sidebar from './Sidebar';
import { useCheckins } from '../../utils/hooks/apollo.hooks';
import { classes } from '../../styles.classes';

export default function CheckInFeed({user}) {

  const { checkins } = useCheckins();


  return (
    <>
      <Grid item xs={8} sx={classes.feedSection}>
        { checkins.map(checkin => (
           <CheckInCard key={checkin.id} checkin={checkin}/>
          ))
        }
      </Grid >
      <Grid item xs={4}>
        <Sidebar user={user} />
      </Grid>
    </>

  )
}
