import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';

const styles={
  iconButton: {
    "&.Mui-disabled": {
      color: 'rgba(0, 0, 0, 0.54)'
    }
  }
}

export default function ToastButton({onClick, isUserToasted}) {
  return (
    <Tooltip title="Toast this Checkin">
        <IconButton aria-label="toast this checkin" 
          onClick={onClick}
          disabled={isUserToasted}
          sx={styles.iconButton}
        >
          {
            isUserToasted
              ? <LocalCafeRoundedIcon />
              : <LocalCafeOutlinedIcon />
          }
        </IconButton>
    </Tooltip>
  )
}
