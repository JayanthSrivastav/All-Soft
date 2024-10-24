import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import '../App.css';

const Ngrok = () => {
  
  return (
    <div className='BGCanvas'>
      <Box sx={{ width:{xs: '100%', sm: '100%', md: '90%', lg: '85%' }, boxShadow: {md: 24, lg: 24}, opacity: 0.97 }} className='Box-features'>
        
        <div className='box-div'>
          <div className='Tool'>
            <a href='https://ngrok.com/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>
              <Typography variant='h1' className='Logo'>ngrok</Typography>
            </a>
          </div>
          <div className='Download'>
            <Typography variant='h3'component='h3' className='box-heading'>
              Download.
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 1
            </Typography>
            <Divider className='custom-divider'/>

            <p className='box-text'>Go to <i>ngrok</i>'s <a href='https://ngrok.com/' target='_blank' rel="noreferrer">official website</a>.</p>
            <img src={require('../assets/ngrok/download-step1.png')} alt='step-1' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <Divider className='custom-divider'/>

            <p className='box-text'>Login if you already have an account or else, Sign up.</p>
            <img src={require('../assets/ngrok/download-step2.png')} alt='step-2' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <Divider className='custom-divider'/>

            <p className='box-text'>After login, you'll be led into the download page. Now, download accordingly to your Operating System. For this, we are going to download for windows so, click on the  'Download for Windows' button and wait until the zip file gets downloaded.</p>
            <img src={require('../assets/ngrok/download-step3.png')} alt='step-3' className='screenshots'/>
            <div style={{paddingBottom: '10%'}}></div>

            <Typography variant='h3'component='h3' className='box-heading'>
              Setting up
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>
            <Divider className='custom-divider'/>

            <p className='box-text'>Extract the downloaded zip file.</p>
            <img src={require('../assets/ngrok/setup-step4.gif')} alt='step-4' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>
            <Divider className='custom-divider'/>

            <p className='box-text'>Open the extracted folder and you'll find the <i>ngrok</i> application.</p>
            <img src={require('../assets/ngrok/setup-step5.png')} alt='step-5' className='screenshots'/>
            <Divider className='custom-s-divider'/>

            <p className='box-text'>Open the <i>ngrok</i> application. The <i>ngrok</i> application is a Terminal.</p>
            <img src={require('../assets/ngrok/setup-step5-2.png')} alt='step-5' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 6
            </Typography>
            <Divider className='custom-divider'/>

            <p className='box-text'>Now, go back to the <i>ngrok</i> website and copy the command with your unique authtoken from 'Connect your account'</p>
            <img src={require('../assets/ngrok/setup-step6-1.gif')} alt='step-6' className='screenshots'/>
            <Divider className='custom-s-divider'/>

            <p className='box-text'>and paste it in the <i>ngrok</i> Terminal to store your authtoken to the default <i>ngrok.yml</i> configuration file.</p>
            <img src={require('../assets/ngrok/setup-step6-2.gif')} alt='step-6' className='screenshots' />
            <img src={require('../assets/ngrok/setup-step62.png')} alt='step-6' className='screenshots' />
            <Divider className='custom-s-divider'/>

            <p className='box-text'><i>Authtoken is saved to configuration file: ../ngrok.yml</i>, meaning the authtoken is successfully stored.</p>
            
          </div>
        </div>
      </Box>
    </div>
  )
  
}

export default Ngrok