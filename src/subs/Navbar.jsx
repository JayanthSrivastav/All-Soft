// import React from 'react';
// import { AppBar, IconButton, Toolbar } from '@mui/material';
// import {CatchingPokemon} from '@mui/icons-material';
// // import { color } from '@mui/system';
// import { Typography, Stack, Button } from '@mui/material';

// const Navbar = () => {
//   return (
//     <AppBar position='static' sx={{ backgroundColor: "#000000", color:"#bb86fc" }}>
//         <Toolbar>
//             <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{flexGrow: 1}} href='/'>
//                 <CatchingPokemon />
//             </IconButton>
//             <Typography variant='h6' component='div'>
//                 POKEMONAPP
//             </Typography>
//             <Stack direction='row' spacing={2} sx={{ paddingLeft: 3 }}>
//               <Button color='inherit'>Software</Button>
//               <Button color='inherit'>Dependency</Button>
//             </Stack>
//         </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
// import { CatchingPokemon } from '@mui/icons-material';

// const pages = ['Software', 'Dependencies', 'About', 'Contact'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#000", boxShadow: "none" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         {/* <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}> */}
//           {/* Left Side - Logo */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>

//             {/* <IconButton size='large' color='inherit' aria-label='logo' href='/'>
//               <CatchingPokemon />
//             </IconButton> */}
//             <CatchingPokemon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//               }}
//             >
//               All-Soft
//             </Typography>
//           </Box>

//           {/* Center - Navigation Links */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
//             {pages.map((page) => (
//               <Button key={page} onClick={handleCloseNavMenu} sx={{ color: 'white', mx: 2, fontWeight: 500 }}>
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* Right Side - Responsive Menu Icon */}
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               {pages.map((page) => (
//                 <Button key={page} onClick={handleCloseNavMenu} sx={{ width: '100%', textAlign: 'left' }}>
//                   {page}
//                 </Button>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Container } from '@mui/material';
// import { CatchingPokemon } from '@mui/icons-material';

// const pages = ['Software', 'Dependency'];

// const Navbar = () => {
//   return (
//     <AppBar position='static' sx={{ backgroundColor: "#000000", color: "#bb86fc" }}>
//       <Container maxWidth="xl">
//         <Toolbar>
//           <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ flexGrow: 1 }} href='/'>
//             <CatchingPokemon />
//           </IconButton>
//           <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//             POKEMONAPP
//           </Typography>

//           <Stack direction='row' spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button key={page} color='inherit'>
//                 {page}
//               </Button>
//             ))}
//           </Stack>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;


// 

// import * as React from 'react';
// import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button } from '@mui/material';
// import { CatchingPokemon } from '@mui/icons-material';

// const pages = ['Software', 'Dependency'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#000000", color: "#bb86fc" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ flexGrow: 1 }} href="/">
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <CatchingPokemon sx={{ mr: 1 }} />
//               <Typography variant="h6" noWrap component="span" sx={{
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}>
//                 POKEMONAPP
//               </Typography>
//             </Box>
//           </IconButton>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <CatchingPokemon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;

import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button } from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';

const pages = ['Software', 'Dependency'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000", color: "#bb86fc" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo" href="/">
              <CatchingPokemon sx={{ mr: 1 }} />
              <Typography variant="h6" noWrap component="span" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
                POKEMONAPP
              </Typography>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <CatchingPokemon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo" href="/">
              <CatchingPokemon sx={{ mr: 1 }} />
              <Typography variant="h6" noWrap component="span" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
                POKEMONAPP
              </Typography>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
