import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CustomAutocomplete({value, options, optionEqualityCheck, handleChange}) {
  return (
    <Autocomplete
      disablePortal
      clearOnBlur={false}
      id="combo-box-demo"
      value={value}
      options={options}
      isOptionEqualToValue={(option, value) => optionEqualityCheck(option) === value}
      sx={{ width: 300 }}
      getOptionLabel={(option) => (`${option.roaster} ${option.label}`)}
      getOptionKey={(option) => (`${option.roaster} ${option.label}`)}
      renderInput={(params) => <TextField {...params} label="Search coffees" />}
      onChange={(_event, value)=>handleChange(value)}
    />
  );
}