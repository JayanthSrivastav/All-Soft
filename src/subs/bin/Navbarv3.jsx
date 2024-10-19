// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import {CatchingPokemon} from '@mui/icons-material';

// const pages = ['Software', 'Tools', 'Dependencies'];

// export default function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
    
//     <AppBar position="static" sx={{ backgroundColor: "#1e2327", color:"#bb86fc" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Desktop logo */}
//           <IconButton size="large" edge="start" color="inherit" aria-label="logo" href="/" disableRipple  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
//             <CatchingPokemon sx={{ mr: 1 }} />
//             <Typography variant="h6" noWrap component="span" sx={{
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}>
//               all<span style={{color:'#FFFDD0'}}>soft</span>
//             </Typography>
//           </IconButton>
          
//           {/* Desktop menu */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, 
//                   color: '#FFFDD0', 
//                   display: 'block',
//                   fontFamily: 'monospace',
//                   fontWeight: 700,
//                   letterSpacing: '.3rem',
//                   textDecoration: 'none' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {/* Mobile layout */}
//           <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
//             {/* Menu icon */}
//             <IconButton
//               size="large"
//               aria-label="menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>

//             {/* Centered logo */}
//             <IconButton size="large" color="inherit" aria-label="logo" href="/" disableRipple sx={{ flexGrow: 0 }}>
//               <CatchingPokemon sx={{ mr: 1 }} />
//               <Typography variant="h6" noWrap component="span" sx={{
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}>
//                 all<span style={{color:'#FFFDD0'}}>soft</span>
//               </Typography>
//             </IconButton>

//             {/* Empty box to balance the layout */}
//             <Box sx={{ width: 48 }} /> {/* Adjust width to match the menu icon */}
//           </Box>

//           {/* Mobile menu */}
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'left',
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{ display: { xs: 'block', md: 'none' } }}
//           >
//             {pages.map((page) => (
//               <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { CatchingPokemon } from '@mui/icons-material';

const pages = ['Software', 'Tools', 'Dependencies'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleTogglePage = (page) => {
    setSelectedPage((prev) => (prev === page ? null : page));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e2327", color: "#bb86fc" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo" href="/" disableRipple sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <CatchingPokemon sx={{ mr: 1 }} />
            <Typography variant="h6" noWrap component="span" sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              all<span style={{ color: '#FFFDD0' }}>soft</span>
            </Typography>
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => { handleTogglePage(page); handleCloseNavMenu(); }}
                variant={selectedPage === page ? 'outlined' : ''}
                sx={{
                  my: 2,
                  color: selectedPage === page ? '#bb86fc' : '#FFFDD0', // Change text color for selected
                  borderColor: selectedPage === page ? '#bb86fc' : 'transparent', // Set border color for outlined
                  display: 'block',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                  '&:hover': {
                    borderColor: '#bb86fc', // Hover effect for outline
                    // backgroundColor: selectedPage === page ? 'rgba(187, 134, 252, 0.2)' : 'rgba(187, 134, 252, 0.1)', // Optional hover background
                  },
                }}
                disableRipple
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <IconButton size="large" color="inherit" aria-label="logo" href="/" disableRipple sx={{ flexGrow: 0 }}>
              <CatchingPokemon sx={{ mr: 1 }} />
              <Typography variant="h6" noWrap component="span" sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
                all<span style={{ color: '#FFFDD0' }}>soft</span>
              </Typography>
            </IconButton>

            <Box sx={{ width: 48 }} />
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
