import { red } from '@mui/material/colors';

export const classes = {
    paper: {
      padding: '50px',
      margin: '20px',
      width: '100%'
    },
    chatGrid: {
      margin: '20px'
    },
    messageList: {
      width: '100%'
    },
    userMessageRow: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%',
      minHeight: '30px',
      marginBottom: '10px'
    },
    userMessage: {
      backgroundColor: '#f2f2f2',
      marginRight: '20px',
      paddingRight: '10px',
      width: '60%',
      borderRadius: '15px',
      textAlign: 'right'
    },
    otherMessageRow: {
      display: 'flex',
      minHeight: '30px',
      marginBottom: '10px'
    },
    otherMessage: {
      border: '1px solid #d9d9d9',
      marginLeft: '20px',
      paddingLeft: '10px',
      width: '60%',
      borderRadius: '15px'
    },
    author: {
      fontWeight: 'bold'
    },
    navContainer: {
      padding: '10px 20px'
    },
    checkInButton: {
      margin: '30px 0 0 30px'
    },
    checkinCardContainer: {
      width: '90%', 
      margin: '30px auto' 
    },
    checkinCardAvatar: { 
      bgcolor: red[500] 
    },
    userNotes: {
      border: '1px solid black', 
      borderRadius: '15px', 
      padding: '10px'
    },
    expandBtnContainer: {
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center'
    },
    expandBtnText: {
      marginLeft: 'auto'
    },
    feedSection: {
      backgroundColor: '#FBEEE6', 
      minHeight: '100vh',
    },
    sidebar: { 
      display: { xs: 'none', lg: 'flex' },
    },
    homeContainer: { 
      borderBottom: 1, 
      borderColor: 'divider' 
    },
    messageListContainer: { 
      maxHeight: '50vh', 
      overflowY: 'scroll' 
    }

  }