// import React from 'react';
// import { AppBar, IconButton, Toolbar } from '@mui/material';
// import {CatchingPokemon} from '@mui/icons-material';
// // import { color } from '@mui/system';
// // import { Typography, Stack, Button } from '@mui/material';

// const Navbar = () => {
//   return (
//     <AppBar position='static' sx={{ backgroundColor: "#000000", color:"#bb86fc" }}>
//         <Toolbar>
//             <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{flexGrow: 1}} href='/'>
//                 <CatchingPokemon />
//             </IconButton>
//             {/* <Typography variant='h6' component='div'>
//                 POKEMONAPP
//             </Typography>
//             <Stack direction='row' spacing={2} sx={{ paddingLeft: 3 }}>
//               <Button color='inherit'>Software</Button>
//               <Button color='inherit'>Dependency</Button>
//             </Stack> */}
//         </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar

// import React from 'react';
// import { AppBar, IconButton, Toolbar, Typography, Button } from '@mui/material';
// import { CatchingPokemon } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position='static' sx={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}>
//       <Toolbar>
//         <IconButton size='large' edge='start' color='inherit' aria-label='logo' component={Link} to='/'>
//           <CatchingPokemon />
//         </IconButton>
//         <Typography 
//           variant='h6'
//           edge='start' 
//           component={Link} 
//           to='/' 
//           sx={{ flexGrow: 1, paddingLeft: 1, fontFamily: 'Poppins, sans-serif', textDecoration: 'none', color: 'inherit' }}
//         >
//           All-Soft
//         </Typography>
//         <Button color='inherit' sx={{ fontFamily: 'Poppins, sans-serif' }} component={Link} to='/software'>
//           Software
//         </Button>
//         <Button color='inherit' sx={{ fontFamily: 'Poppins, sans-serif' }} component={Link} to='/dependencies'>
//           Dependencies
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import { CatchingPokemon } from '@mui/icons-material';
// import { MenuItem } from '@mui/material';

// const pages = ['Software', 'Dependencies'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Logo and Title */}
//           <Box href='/' sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//             <IconButton size='large' color='inherit' aria-label='logo' href='/'>
//               <CatchingPokemon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 ml: 1,
//                 fontFamily: 'Poppins, sans-serif',
//                 fontWeight: 700,
//                 color: 'inherit',
//                 textDecoration: 'none',
//                 paddingLeft: "-5%"
//               }}
//             >
//               All-Soft
//             </Typography>
//           </Box>

//           {/* Menu for Larger Screens */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white' }}>
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* Responsive Menu Icon */}
//           <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
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
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
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
//     <AppBar position="static" sx={{ backgroundColor: "#000", color: "#fff" }}>
//       <Container maxWidth="lg">
//         <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
//           {/* Responsive Menu Icon for small screens */}
//           <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               {pages.map((page) => (
//                 <Button key={page} onClick={handleCloseNavMenu}>
//                   {page}
//                 </Button>
//               ))}
//             </Menu>
//           </Box>

//           {/* Centered Logo and Title */}
//           <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto' }}>
//             <IconButton size='large' color='inherit' aria-label='logo' href='/'>
//               <CatchingPokemon />
//             </IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 ml: 1,
//                 fontFamily: 'Poppins, sans-serif',
//                 fontWeight: 700,
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               All-Soft
//             </Typography>
//           </Box>

//           {/* Navigation Links */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
//             {pages.map((page) => (
//               <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', mx: 2 }}>
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

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { CatchingPokemon } from '@mui/icons-material';

const pages = ['Software', 'Dependencies', 'About', 'Contact'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000", color: "#fff" }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo and Title in the Center */}
          <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto' }}>
            <IconButton size='large' color='inherit' aria-label='logo' href='/'>
              <CatchingPokemon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              All-Soft
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', mx: 2 }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Responsive Menu Icon */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
            >
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu}>
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
