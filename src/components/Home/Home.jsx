import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from './CustomTabPanel';
import Chat from "../Chat/Chat";
import CheckInFeed from '../Feed/CheckInFeed'
import { classes } from '../../styles.classes';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home({user}) {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={classes.homeContainer}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Feed" {...a11yProps(0)} />
          <Tab label="Chat" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={1}>
          <CheckInFeed user={user} />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container>
          <Chat user={user} />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </>
  )
}
