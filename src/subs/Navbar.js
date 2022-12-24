import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import {CatchingPokemon} from '@mui/icons-material';
// import { color } from '@mui/system';
// import { Typography, Stack, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: "#000000", color:"#bb86fc" }}>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{flexGrow: 1}}>
                <CatchingPokemon />
            </IconButton>
            {/* <Typography variant='h6' component='div'>
                POKEMONAPP
            </Typography>
            <Stack direction='row' spacing={2} sx={{ paddingLeft: 3 }}>
              <Button color='inherit'>Software</Button>
              <Button color='inherit'>Dependency</Button>
            </Stack> */}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar