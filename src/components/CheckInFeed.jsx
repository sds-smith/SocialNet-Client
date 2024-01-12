import React from 'react'
import Grid from '@mui/material/Grid';
import CheckInCard from './CheckInCard'
import { checkins } from '../assets/mock-data';

export default function CheckInFeed() {
  return (
    <>
      <Grid item xs={8} sx={{backgroundColor: '#FBEEE6'}}>
        { Object.values(checkins).map(checkin => (
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
