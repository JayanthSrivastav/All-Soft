import React from 'react';
import { Typography, Box } from '@mui/material';
// import PropTypes from 'prop-types';
import '../App.css';

const Spring = () => {
  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
        
        <div className='box-div'>
          <div className='Tool' >
            <a href='https://spring.io/tools' target='_blank' rel="noreferrer">
              <img src='https://azpanel.azilen.com/uploads/everything_must_know_spring_boot_application_scratch_12_8c4e62d4fe.jpg' alt='maven' width='40%' className='IMU' ></img>
              {/* <Typography variant='h1' className='im-head'>
                java
              </Typography> */}
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
            <p className='box-text'>Go to <i>Spring</i>'s <a href='https://spring.io/tools' target='_blank' rel="noreferrer">official website</a>.</p>
            <img src={require('../assets/spring/download-step1.png')} alt='step-1' className='screenshots'/>

            <p className='box-text'>Download the latest version of Spring Tools Suite for the desired OS. In this case Windows x86_64. </p>
            <img src={require('../assets/spring/download-step2.png')} alt='step-1' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Setting up
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <p className='box-text'>Extract the downloaded archive.</p>
            <img src={require('../assets/spring/setup-step3.gif')} alt='step-2' className='screenshots' />

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <p className='box-text'>Open the extracted folder.</p>
            <img src={require('../assets/spring/setup-step4.png')} alt='step-3' className='screenshots'/>
            <p className='box-text'>Extract <i>contents</i> archive and open the extracted folder. </p>
            <img src={require('../assets/spring/setup-step5.png')} alt='step-3' className='screenshots'/>

            <p className='box-text'>Open the <i>sts-4.17.0.RELEASE</i> folder.</p>
            <img src={require('../assets/spring/setup-step6.png')} alt='step-3' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Getting started
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>
            
            <p className='box-text'>Open <i>SpringToolSuite4.exe</i> application.</p>
            <img src={require('../assets/spring/started-step7.png')} alt='step-4' className='screenshots'/>
            <img src={require('../assets/spring/started-step8.png')} alt='step-4' className='screenshotd'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>

            <p className='box-text'>Browse the <i>workspace</i> of the project and click on <i>Launch</i>.</p>
            <img src={require('../assets/spring/started-step9.png')} alt='step-4' className='screenshotd'/>
            <img src={require('../assets/spring/started-step10.png')} alt='step-4' className='screenshotd'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>
            <p className='box-text'>The <i>Spring Tool Suite-4</i> is successfully Launched.</p>
            <img src={require('../assets/spring/started-step11.png')} alt='step-5' className='screenshots'/>

            <p className='box-text'>Now, you can start using SpringBoot.</p>

          </div>
        </div>
      </Box>
    </div>
  )
}

export default Spring