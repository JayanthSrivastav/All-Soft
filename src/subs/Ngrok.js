import { Button, Typography, Box, Stepper, Step, StepButton } from '@mui/material'
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'
import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';


const steps = ['Download', 'Start using'];

const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const Ngrok = () => {
  

  // function switchCase(key) {

  //   switch (key) {
  //     case 0:
  //       return "Download";
  //       break;
  //     case 1:
  //       return "Start using.";
  //       break;
  //     default:
  //       return 0;
  //   }
  // }

  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '100vh', height: '100vh', marginTop: '5vh' }}>
        
        <div>
          
        </div>
      </Box>
    </div>
  )
}

export default Ngrok