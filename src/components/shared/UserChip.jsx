import React from 'react'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export default function UserChip({user}) {
  return (
    <Chip 
        avatar={
            <Avatar aria-label="CheckIn">
              {
                user.photoURL ? (
                  <img
                    src={user.photoURL}
                    id={user.displayName}
                    alt={user.displayName}
                    style={{width: '100%', height: 'auto'}}
                  />
                ) : (user.displayName[0])
              }
            </Avatar>
        }
        label={user?.displayName}
    />
  )
}


