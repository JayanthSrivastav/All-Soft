// import React, { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import { IconButton, Paper } from '@mui/material';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import '../App.css';


// const SearchBar = () => {
//   const [input, setInput] = useState("");

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingTop: '5vh', paddingBottom: '15vh'}}>
//       <Paper
//         component="form"
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           width: { xs: '90vw', sm: '85vw', md: '750px' },
//           height: { xs: '45px', sm: '50px', md: '50px' },
//           borderRadius: '25px',
//           backgroundColor: '#2a2a2a',
//           boxShadow: 2,
//         }}
//       >
//         <InputBase
//           sx={{
//             ml: 1,
//             flex: 1,
//             height: '100%', // Full height of the Paper
//             '& .MuiInputBase-input': {
//               backgroundColor: 'transparent',
//               color: '#ffffff',
//               padding: '10px',
//               height: '100%', // Ensure input takes full height
//             },
//           }}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Search"
//           inputProps={{ 'aria-label': 'search-bar' }}
//         />
//         <Divider sx={{ height: '80%', m: 0.5, backgroundColor: '#444' }} orientation="vertical" />
//         <IconButton type="search" sx={{ p: '10px', color: '#ffffff', height: '100%' }} aria-label="search">
//           <SearchIcon />
//         </IconButton>
//       </Paper>
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    // e.preventDefault();
    setInput(value);
    onSearch(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '5vh', paddingBottom: '15vh'}}>
      <Paper
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '90vw', sm: '85vw', md: '750px' },
          height: { xs: '45px', sm: '50px', md: '50px' },
          borderRadius: '25px',
          backgroundColor: '#2a2a2a',
          boxShadow: 2,
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            height: '100%',
            '& .MuiInputBase-input': {
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '10px',
              height: '100%',
            },
          }}
          value={input}
          onChange={handleSearch}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search-bar' }}
        />
        <Divider sx={{ height: '80%', m: 0.5, backgroundColor: '#444' }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: '10px', color: '#ffffff', height: '100%' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
