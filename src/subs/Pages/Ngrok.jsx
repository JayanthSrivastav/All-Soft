import { Typography, Box } from '@mui/material'
import React from 'react';
// import PropTypes from 'prop-types';
import '../App.css'
import logo from '../assets/logo/ngrok.svg';


// const steps = ['Download', 'Start using'];

// const drawerWidth = 240;

const Ngrok = () => {
  
  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
        
        <div className='box-div'>
          <div className='Tool'>
            <a href='https://ngrok.com/' target='_blank' rel="noreferrer">
              {/* <img src='http://www.endtoend.ai/assets/blog/tutorial/ngrok-ssh-forwarding/ssh_ngrok.jpg' alt='ngrok' width='40%' ></img> */}
              <img src={logo} alt='ngrok' width='40%' className='logo-image'></img>
            </a>
            <Typography variant='body'>

            </Typography>
          </div>
          <div className='Download'>
            {/* <p className='box-heading'>Download</p> */}
            <Typography variant='h3'component='h3' className='box-heading'>
              Download.
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 1
            </Typography>
            <p className='box-text'>Go to <i>ngrok</i>'s <a href='https://ngrok.com/' target='_blank' rel="noreferrer">official website</a>.</p>
            <img src={require('../assets/ngrok/download-step1.png')} alt='step-1' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <p className='box-text'>Login if you already have an account or else, Sign up.</p>
            <img src={require('../assets/ngrok/download-step2.png')} alt='step-2' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <p className='box-text'>After login, you'll be led into the download page. Now, download accordingly to your Operating System. For this, we are going to download for windows so, click on the  'Download for Windows' button and wait until the zip file gets downloaded.</p>
            <img src={require('../assets/ngrok/download-step3.png')} alt='step-3' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Setting up
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>
            <p className='box-text'>Extract the downloaded zip file.</p>
            <img src={require('../assets/ngrok/setup-step4.gif')} alt='step-4' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>
            <p className='box-text'>Open the extracted folder and you'll find the <i>ngrok</i> application.</p>
            <img src={require('../assets/ngrok/setup-step5.png')} alt='step-5' className='screenshots'/>
            <p className='box-text'>Open the <i>ngrok</i> application.</p>
            <img src={require('../assets/ngrok/setup-step5-2.png')} alt='step-5' className='screenshots'/>
            <p className='box-text'>The <i>ngrok</i> application is a Terminal.</p>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 6
            </Typography>
            <p className='box-text'>Now, go back to the <i>ngrok</i> website and copy the command with your unique authtoken from 'Connect your account'</p>
            <img src={require('../assets/ngrok/setup-step6-1.gif')} alt='step-6' className='screenshots'/>
            <p className='box-text'>and paste it in the <i>ngrok</i> Terminal to store your authtoken to the default <i>ngrok.yml</i> configuration file.</p>
            <img src={require('../assets/ngrok/setup-step6-2.gif')} alt='step-6' className='screenshots' />
            <img src={require('../assets/ngrok/setup-step62.png')} alt='step-6' className='screenshots' />
            <p className='box-text'><i>Authtoken is saved to configuration file: ../ngrok.yml</i>, meaning the authtoken is successfully stored.</p>

          </div>
        </div>
      </Box>
    </div>
  )
  
}

export default Ngrok