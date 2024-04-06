import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import CreateCheckinDialog from "../shared/CreateCheckinDialog";
import CheckInCard from './CheckInCard';
import Sidebar from './Sidebar';
import { useCheckins, useCoffees, useAddCheckin } from '../../utils/hooks/apollo.hooks';
import { classes } from '../../styles.classes';

export default function CheckInFeed() {
  const [open, setOpen] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [userNotes, setUserNotes] = useState('');

  const { coffees } = useCoffees();
  const { addCheckin } = useAddCheckin();
  const { checkins } = useCheckins();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
      setSelectedCoffee(null);
      setImageUrl('');
      setUserNotes('');
      setOpen(false);
  };

  const handleCreateCheckin = async () => {
      if (selectedCoffee) {
          await addCheckin({
              coffeeID: selectedCoffee.id,
              imageUrl,
              userNotes
          })
      }
      handleClose();
  }

  return (
    <>
      <Grid item xs={12} lg={8} sx={classes.feedSection}>
        <Grid item xs={12} lg={7}>
            <Button
              variant='contained'
              style={classes.checkInButton}
              onClick={handleClickOpen}
            >
              Create Checkin
            </Button>
        </Grid>
        { checkins.map(checkin => (
            <Grid item xs={12} lg={7}>
             <CheckInCard key={checkin.id} checkin={checkin}/>
            </Grid>
          ))
        }
      </Grid >
      <Grid item xs={0} lg={4} sx={classes.feedSection}>
        <Sidebar />
      </Grid>
      <CreateCheckinDialog 
        open={open}
        handleClose={handleClose}
        coffees={coffees}
        selectedCoffee={selectedCoffee}
        setSelectedCoffee={setSelectedCoffee}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        userNotes={userNotes}
        setUserNotes={setUserNotes}
        handleCreateCheckin={handleCreateCheckin}
      />
    </>
  )
}
