import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CustomAutocomplete({value, options, getOptionString, textFieldLabel, handleChange}) {
  return (
    <Autocomplete
      disablePortal
      clearOnBlur={false}
      id="combo-box-demo"
      value={value}
      options={options}
      sx={{ width: 300 }}
      getOptionLabel={getOptionString}
      getOptionKey={getOptionString}
      renderInput={(params) => <TextField {...params} label={textFieldLabel} />}
      onChange={(_event, value)=>handleChange(value)}
    />
  );
}