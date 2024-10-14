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
						<img src='' alt='postman' width='40%' className='IMU'></img>
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
					
					<p className='box-text'>Go to <i>Postman</i>'s official <a href='https://www.postman.com/downloads/' target='_blank' rel='noreferrer'>website</a> to download Postman API.</p>
					<img src={require('../assets/postman/download-step1.png')} alt='step-1' className='screenshots' />
					<Divider className='custom-divider'/>

					<p className='box-text'>Click on <i>Windows 64-bit</i> to download.</p>
					<img src={require('../assets/postman/download-step1-1.png')} alt='step-1-1' className='screenshots' />
					<Divider className='custom-divider'/>

					<Typography variant='h3'component='h3' className='box-heading'>
			  			Setting up.
					</Typography>

					<Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 2
					</Typography>

					<p className='box-text'>Open the dowwnloaded file.</p>
					<img src={require('../assets/postman/started-step2.png')} alt='step-2' className='screenshots' />
					<Divider className='custom-divider'/>

					<Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 3
					</Typography>

					<p className='box-text'>Postman is ready to use.</p>
					<img src={require('../assets/postman/started-step3.png')} alt='step-3' className='screenshots' />
					
					<p className='box-text'>Get CRUD away with Postman.</p>
					
				</div>
			</div>
		</Box>
	</div>
  )
}

export default Postman