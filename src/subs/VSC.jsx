import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import '../App.css';

const VSC = () => {
  return (
    <div className='BGCanvas'>
		<Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
			<div className='box-div'>
				<div className='Tool'>
					<a href='https://code.visualstudio.com/download' target='_blank' rel="noreferrer">
						<img src={require('../assets/images/VSC.jpg')} alt='vsc' width='40%' className='IMU'></img>
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
					
					<p className='box-text'>Go to the VSC <a href='https://code.visualstudio.com/download' target='_blank' rel='noopener noreferrer'>website</a> to download it.</p>
					<img src={require('../assets/vsc/download-step1.png')} alt='step-1' className='screenshots' />
					<Divider className='custom-divider'/>

					<p className='box-text'>Download the suitable installer.</p>
					<img src={require('../assets/vsc/download-step1-1.png')} alt='step-1-1' className='screenshots' />

					<Typography variant='h3'component='h3' className='box-heading'>
			  			Setting up.
					</Typography>

					<Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 2
					</Typography>
					
					<p className='box-text'>Open the installation file.</p>
					<img src={require('../assets/vsc/setup-step2.png')} alt='step-2' className='screenshots' />
					<Divider className='custom-divider'/>

					<Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 3
					</Typography>
					
					<p className='box-text'>Accept the agreement.</p>
					<img src={require('../assets/vsc/setup-step3.png')} alt='step-3' className='screenshote' />
					<Divider className='custom-divider'/>

					<p className='box-text'>Click on Next.</p>
					<img src={require('../assets/vsc/setup-step3-1.png')} alt='step-3-1' className='screenshote' />
					<Divider className='custom-divider'/>

					<p className='box-text'>Check the respective boxes and click on Next.</p>
					<img src={require('../assets/vsc/setup-step3-2.png')} alt='step-3-2' className='screenshote' />
					<Divider className='custom-divider'/>

					<p className='box-text'>Click on <i>Install</i> to start the installation.</p>
					<img src={require('../assets/vsc/setup-step3-3.png')} alt='step-3-3' className='screenshote' />
					<Divider className='custom-divider'/>

					<p className='box-text'>Wait until the installation is complete.</p>
					<img src={require('../assets/vsc/setup-step3-4.png')} alt='step-3-4' className='screenshote' />
					<Divider className='custom-divider'/>

					<Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 4
					</Typography>
					
					<p className='box-text'>You have successfuly installed VSC.</p>
					<img src={require('../assets/vsc/setup-step4.png')} alt='step-4' className='screenshots' />

					<p className='box-text'>Code.</p>

				</div>
			</div>
		</Box>
	</div>
  )
}

export default VSC