import { useState, useRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useAddCoffee } from '../../utils/hooks/apollo.hooks';

export default function AddCoffeeForm({setSelectedCoffee}) {
  const { addCoffee } = useAddCoffee();

  const [expanded, setExpanded] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const labelRef = useRef(null);
  const roasterRef = useRef(null);
  const originRef = useRef(null);
  const roastRef = useRef(null);
  const processRef = useRef(null);
  const tastingNotesRef = useRef(null);
  const descriptionRef = useRef(null);

  const coffeeToAddRef = {
    'Label': labelRef,
    'Roaster': roasterRef,
    'Origin': originRef,
    'Roast': roastRef,
    'Process': processRef,
    'Tasting Notes': tastingNotesRef,
    'Description': descriptionRef,
  }

  const handleAddCoffee = async () => {
    const coffeeToAdd = Object.entries(coffeeToAddRef).reduce((coffeeObj, [label, ref]) => ({
      ...coffeeObj,
      [label] : ref.current.value
    }), {});
    if (Object.values(coffeeToAdd).some(val => !Boolean(val))) {
      setDisplayAlert(true);
      return;
    }
    const coffee = await addCoffee(coffeeToAdd);
    setSelectedCoffee(await coffee);
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
        {Object.entries(coffeeToAddRef).map(([label, ref]) => (
          <TextField 
            required
            key={label}
            label={label}
            inputRef={ref}
          />  
        ))}
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={handleAddCoffee}>Add Coffee</Button>
        </AccordionActions>
        {displayAlert && 
          <Alert severity="warning" onClose={() => {setDisplayAlert(false)}}>
            Please complete required fields.
          </Alert>
        }
      </Accordion>
  );
}