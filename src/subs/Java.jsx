import React from 'react';
import { Typography, Box } from '@mui/material';
// import PropTypes from 'prop-types';
import '../App.css';

const Java = () => {
  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
        
        <div className='box-div'>
          <div className='Tool' >
            <a href='https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html' target='_blank' rel="noreferrer">
              <img src='https://venturebeat.com/wp-content/uploads/2015/12/oracle-java-e1450723340931.jpg?w=1200&strip=all' alt='java' width='40%' className='IMU' ></img>
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
            <p className='box-text'>Select a version (<a href='https://www.oracle.com/in/java/technologies/downloads/#java19' target='_blank' rel="noreferrer">Java 19</a>, <a href='https://www.oracle.com/in/java/technologies/downloads/#java17' target='_blank' rel="noreferrer">Java 17</a> or <a href='https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html' target='_blank' rel="noreferrer">Java 8</a>) to download. We are going to download Java Amazon Corretto 8 or simply, <a href='https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html' target='_blank' rel="noreferrer">Java 8</a>. Go to the <a href='https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html' >official website</a> and download the suitable msi installer.</p>
            <img src={require('../assets/java/download-step1.png')} alt='step-1' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Installing
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <p className='box-text'>Open the installer.</p>
            <img src={require('../assets/java/download-step2.gif')} alt='step-2' className='screenshots' />

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <p className='box-text'>Click Next to continue.</p>
            <img src={require('../assets/java/install-step3.png')} alt='step-3' className='screenshotd'/>


            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>
            <p className='box-text'>Browse the desired location to store and click on Next.</p>
            <img src={require('../assets/java/install-step4.png')} alt='step-4' className='screenshotd'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>
            <p className='box-text'>Click on Install to begin the installation, </p>
            <img src={require('../assets/java/install-step5.png')} alt='step-5' className='screenshotd'/>
            <p className='box-text'>and wait until the installation is completed</p>
            <img src={require('../assets/java/install-step6.png')} alt='step-5' className='screenshotd'/>
            <p className='box-text'>and then, click on Next.</p>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 6
            </Typography>
            <p className='box-text'>Now, click on Finish to exit the Setup Wizard. You have successfully install Amazon Corretto JDK 8.</p>
            <img src={require('../assets/java/install-step7.png')} alt='step-6' className='screenshotd'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Verification
            </Typography>

            <p className='box-text'>In the command prompt, type in <i>java -version</i> and run it.</p>
            <img src={require('../assets/java/verify-step7.png')} alt='step-7' className='screenshots' />
            <img src={require('../assets/java/verify-step8.png')} alt='step-8' className='screenshots' />
            <p className='box-text'>You have successfully installed Java 8.</p>

          </div>
        </div>
      </Box>
    </div>
  )
}

export default Java