import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import '../App.css';

const Postman = () => {
  return (
    // <div>Get CRUD away with Postman</div>
	<div className='BGCanvas'>
		<Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
			<div className='box-div'>
				<div className='Tool'>
					<a href='' target='_blank' rel="noreferrer">
						<img src='' alt='' width='40%' className='IMU'></img>
					</a>
					<Typography variant='body'>

					</Typography>
				</div>
				<div className='Download'>
					<Typography variant='h3' component='h3' className='box-heading'>
						Download.
					</Typography>

					<Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 1
					</Typography>
					
					<p className='box-text'></p>
					<img src={require('../assets/')} alt='step-1' className='screenshots' />
					<Divider className='custom-divider'/>

					<Typography variant='h3'component='h3' className='box-heading'>
			  			Setting up.
					</Typography>
				</div>
			</div>
		</Box>
	</div>
  )
}

export default Postman