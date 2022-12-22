import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemonIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar