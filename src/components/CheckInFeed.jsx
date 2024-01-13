import React from 'react'
import Grid from '@mui/material/Grid';
import CheckInCard from './CheckInCard'
import { useCheckins } from '../utils/hooks/apollo.hooks';

export default function CheckInFeed() {

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
        <div style={{backgroundColor: '#FBEEE6'}}>sidebar</div>
      </Grid>
    </>

  )
}
