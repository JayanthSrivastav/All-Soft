import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Fab, IconButton, Paper, TextField } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

const SearchBar = () => {
  return (
    <div className='search-wrapper'>
        {/* <TextField fullWidth></TextField>
        <Fab><SearchIcon color="primary" fontSize='large'/></Fab> */}
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" inputProps={{ 'aria-label': 'search-bar' }} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    </div>
  )
}

export default SearchBar