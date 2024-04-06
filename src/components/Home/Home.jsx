import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from './CustomTabPanel';
import Chat from "../Chat/Chat";
import CheckInFeed from '../Feed/CheckInFeed';
import Search from '../Search/Search';
import { classes } from '../../styles.classes';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const tabs = {
  Feed: {
    component: CheckInFeed
  },
  Search: {
    component: Search
  },
  Chat: {
    component: Chat
  }
};

export default function Home() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setTabValue(newValue);
  };
  
  return (
    <>
      <Box sx={classes.homeContainer}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="tabs">
          {Object.keys(tabs).map((label, index) => <Tab label={label} {...a11yProps(index)} />)}
        </Tabs>
      </Box>
      {Object.values(tabs).map(({component: Component}, index) => (
        <CustomTabPanel value={tabValue} index={index}>
          <Grid container spacing={1}>
            <Component />
          </Grid>
        </CustomTabPanel>
      ))}
    </>
  );
};
