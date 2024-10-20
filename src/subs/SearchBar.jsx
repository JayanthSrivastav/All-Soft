import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input);
    inputRef.current.blur();
  };

  const handleKeyDown = (event) => {
    if (event.key === '/') {
      if (document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
          backgroundColor: '#161616',
          boxShadow: 5,
          opacity: 0.85
        }}
      >
        <InputBase
        inputRef={inputRef}
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
          onChange={handleChange}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search-bar' }}
        />
        <Divider sx={{ height: '80%', m: 0.5, backgroundColor: '#444' }} orientation="vertical" />
        <IconButton type="submit" href='/#card-container' sx={{ p: '10px', color: '#ffffff', height: '100%' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
