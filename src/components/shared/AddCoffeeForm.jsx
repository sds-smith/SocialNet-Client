import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAddCoffee } from '../../utils/hooks/apollo.hooks';

const defaultCoffeeToAddState = {
  'Label': '',
  'Roaster': '',
  'Origin': '',
  'Roast': '',
  'Process': '',
  'Tasting Notes': '',
  'Description': '',
}

export default function AddCoffeeForm({setSelectedCoffee}) {
  const { addCoffee } = useAddCoffee();

  const [expanded, setExpanded] = useState(false);
  const [coffeeToAdd, setCoffeeToAdd] = useState(defaultCoffeeToAddState);

  const handleAddCoffee = async () => {
    const coffee = await addCoffee(coffeeToAdd);
    setSelectedCoffee(await coffee);
    setCoffeeToAdd(defaultCoffeeToAddState);
    setExpanded(false);
  }

  return (
      <Accordion elevation={0} expanded={expanded} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          onClick={()=>setExpanded(!expanded)}
        >
          Don't see your coffee in the dropdown list above? Add it here:
        </AccordionSummary>
        <AccordionDetails>
        {Object.entries(coffeeToAdd).map(([label, value]) => (
          <TextField 
            required
            key={label}
            label={label}
            value={value}
            onChange={(event) => {setCoffeeToAdd({
              ...coffeeToAdd,
              [label] : event.target.value
            })}}
          />  
        ))}
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={handleAddCoffee}>Add Coffee</Button>
        </AccordionActions>
      </Accordion>
  );
}