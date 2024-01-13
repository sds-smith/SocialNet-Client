import React from 'react'
import Grid from '@mui/material/Grid';
import CheckInCard from './CheckInCard';
import Sidebar from './Sidebar';
import { useCheckins } from '../utils/hooks/apollo.hooks';

export default function CheckInFeed({user}) {

  const { checkins } = useCheckins();


  return (
    <>
      <Grid item xs={8} sx={{backgroundColor: '#FBEEE6'}}>
        { checkins.map(checkin => (
          <CheckInCard checkin={checkin}/>
        ))
        }
      </Grid >
      <Grid item xs={4}>
        <Sidebar user={user} />
      </Grid>
    </>

  )
}
