import { useState } from "react";
import Button from "@mui/material/Button";
import { useCoffees, useAddCheckin } from "../../utils/hooks/apollo.hooks";
import CoffeeCard from "./CoffeeCard";
import CreateCheckinDialog from "../shared/CreateCheckinDialog";
import { classes } from "../../styles.classes";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [userNotes, setUserNotes] = useState('');

    const { coffees } = useCoffees();
    const { addCheckin } = useAddCheckin();

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
            console.log('create checkin')
            await addCheckin({
                coffeeID: selectedCoffee.id,
                imageUrl,
                userNotes
            })
        }
        handleClose();
    }

    return (
      <div style={classes.feedSection}>
          <Button
              variant='contained'
              onClick={handleClickOpen}
          >
              Create Checkin
          </Button>
          {Boolean(coffees?.length) && 
            coffees.map((coffee) => (      
                <CoffeeCard key={coffee?.id} coffee={coffee}/>
            ))
          }
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
      </div>
    )
}
