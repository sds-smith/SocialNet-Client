import Button from "@mui/material/Button";
import { useAddCheckin } from "../../utils/hooks/apollo.hooks";
import { classes } from "../../styles.classes";

export default function Sidebar({user}) {
    const { addCheckin } = useAddCheckin();

    const handleClick = async () => {
        console.log('create checkin')
        const checkin = await addCheckin({
            user,
            coffeeID: '65a2a16876b80038af437259',
            imageUrl:"https://i.imgur.com/OZgyMi6.jpg",
            userNotes: 'It hits'
        })
        console.log('Checkin added', checkin)
    }

    return (
      <div style={classes.feedSection}>
          <Button
              variant='contained'
              onClick={handleClick}
          >
              Create Checkin
          </Button>
      </div>
    )
}
