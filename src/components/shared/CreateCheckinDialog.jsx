import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CustomAutocomplete from './CustomAutocomplete';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CreateCheckinDialog(props) {
    const {open, handleClose, coffees, selectedCoffee, setSelectedCoffee, imageUrl, setImageUrl, userNotes, setUserNotes, handleCreateCheckin} = props;

    const handleChangeSelectedCoffee = (val) => {
        setSelectedCoffee(val)
    }
  return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Check in your Cup
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CustomAutocomplete
                      value={selectedCoffee ? `${selectedCoffee?.roaster} ${selectedCoffee?.label}` : null}
                      options={coffees}
                      optionEqualityCheck={option => `${option.roaster} ${option.label}`}
                      handleChange={(newValue)=>{handleChangeSelectedCoffee(newValue)}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                      label='Image URL'
                      value={imageUrl}
                      onChange={(event) => {setImageUrl(event.target.value)}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                      multiline
                      label='How do you like it?'
                      value={userNotes}
                      onChange={(event) => {setUserNotes(event.target.value)}}
                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCreateCheckin} disabled={!selectedCoffee}>
            Check In
          </Button>
        </DialogActions>
      </BootstrapDialog>
  );
}
