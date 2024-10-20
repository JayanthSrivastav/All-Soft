import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import '../App.css';
import logo from '../assets/logo/node.svg';

const Node = () => {
  return (
    <div className='BGCanvas'>
		<Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
			<div className='box-div'>
				<div className='Tool'>
					<a href='' target='_blank' rel="noreferrer">
						<img src={logo} alt='node' width='40%' className='IMU'></img>
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
					
					<p className='box-text'>Go to <i>Node</i>'s official <a href='https://nodejs.org/en' target='_blank' rel='noreferrer'>website</a> to download Node. Download the latest LTS version for a stable experience.</p>
					<img src={require('../assets/node/download-step1.png')} alt='step-1' className='screenshots' />
					<Divider className='custom-divider'/>

					<Typography variant='h3'component='h3' className='box-heading'>
			  			Setting up.
					</Typography>

          <Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 2
					</Typography>
					
					<p className='box-text'>Open the installer.</p>
					<img src={require('../assets/node/setup-step2.png')} alt='step-2' className='screenshots' />
					<Divider className='custom-divider'/>
          
          <Typography variant='h4'component='h4' className='box-s-heading'>
			  			Step 3
					</Typography>
					
					<p className='box-text'>Click on Next to continue the installation.</p>
					<img src={require('../assets/node/setup-step3.png')} alt='step-3' className='screenshote' />
					<Divider className='custom-divider'/>
          
          <p className='box-text'>Change the features only if required. Click on Next.</p>
					<img src={require('../assets/node/setup-step3-1.png')} alt='step-3-1' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>Click on Next.</p>
					<img src={require('../assets/node/setup-step3-2.png')} alt='step-3-2' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>Click on Next.</p>
					<img src={require('../assets/node/setup-step3-3.png')} alt='step-3-3' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>Accept the terms by checking the box. Click on Next.</p>
					<img src={require('../assets/node/setup-step3-4.png')} alt='step-3-4' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>Change the directory if necessary. Click on Next.</p>
					<img src={require('../assets/node/setup-step3-5.png')} alt='step-3-5' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>Click on <i>Install</i> to begin the installation</p>
					<img src={require('../assets/node/setup-step3-8.png')} alt='step-3-8' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>and wait until the installation is complete.</p>
					<img src={require('../assets/node/setup-step3-9.png')} alt='step-3-9' className='screenshote' />
					<Divider className='custom-divider'/>

          <p className='box-text'>Now, click on Finish to exit the Setup Wizard.</p>
					<img src={require('../assets/node/setup-step3-10.png')} alt='step-3-10' className='screenshote' />

          <Typography variant='h3'component='h3' className='box-heading'>
			  			Verification.
					</Typography>

          <p className='box-text'>In Command Prompt run the command <i>npm -v</i> to check if Node is successfully installed.</p>
					<img src={require('../assets/node/verify-step4.png')} alt='step-4' className='screenshots' />
					<Divider className='custom-divider'/>

          <p className='box-text'><i>npm -v</i> returns the installed version.</p>
					<img src={require('../assets/node/verify-step4-1.png')} alt='step-4-1' className='screenshots' />
					
          <p className='box-text'>Node.js is successfully installed.</p>

				</div>
			</div>
		</Box>
	</div>
  )
}

export default Node