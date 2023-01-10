import React from 'react';
import { Typography, Box } from '@mui/material';
// import PropTypes from 'prop-types';
import '../App.css';

const Maven = () => {
  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
        
        <div className='box-div'>
          <div className='Tool' >
            <a href='' target='_blank' rel="noreferrer">
              <img src='https://user-images.githubusercontent.com/88981/188587693-5710e58b-c1ad-442c-ac06-e1aeab30a905.png' alt='maven' width='40%' className='IMU' ></img>
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
            <p className='box-text'>Go to <i>Maven</i>'s <a href='https://maven.apache.org/download.cgi' target='_blank' rel="noreferrer">official website</a>.</p>
            <img src={require('../assets/maven/download-step1.png')} alt='step-1' className='screenshots'/>

            <p className='box-text'>Download the <i>tar.gz binary archive</i> of the latest version. </p>
            <img src={require('../assets/maven/download-step1-2.png')} alt='step-1' className='screenshots'/>



            <Typography variant='h3'component='h3' className='box-heading'>
              Setting up
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <p className='box-text'>Extract the downloaded archive and copy the extracted folder.</p>
            <img src={require('../assets/maven/download-step2.gif')} alt='step-2' className='screenshots' />

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <p className='box-text'>Paste the folder into the desired location. Often placed in the <i>C://</i> drive and then, open the folder.</p>
            <img src={require('../assets/maven/setup-step3.png')} alt='step-3' className='screenshots'/>
            <p className='box-text'>You will find a folder named <i>apache-maven-version</i>. In this case, <i>apache-maven-3.8.6</i>. Open the folder. </p>
            <img src={require('../assets/maven/setup-step3-1.png')} alt='step-3' className='screenshots'/>
            <img src={require('../assets/maven/setup-step3-2.png')} alt='step-3' className='screenshots'/>
            <p className='box-text'>Copy the path. </p>
            <img src={require('../assets/maven/setup-step3-3.png')} alt='step-3' className='screenshots'/>



            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>
            <p className='box-text'>Now, adding a new environment variable for Maven. Click on New.</p>
            <img src={require('../assets/maven/setup-step4.png')} alt='step-4' className='screenshote'/>
            <p className='box-text'>Add the <i>Variable name</i> as <i>MAVEN_HOME</i> and paste the copied path in the <i>Variable value text box and click on OK.</i></p>
            <img src={require('../assets/maven/setup-step4-1.png')} alt='step-4' className='screenshotd'/>
            <p className='box-text'>You can verify <i>MAVEN_HOME</i>. Now, double click on <i>Path</i> to add a new path variable.</p>
            <img src={require('../assets/maven/setup-step4-2.png')} alt='step-4' className='screenshote'/>
            <p className='box-text'>Click on New and enter <i>%MAVEN_HOME%\bin</i> and click on OK.</p>
            <img src={require('../assets/maven/setup-step4-3.png')} alt='step-4' className='screenshote'/>
            <p className='box-text'>As the path for Maven is successfully added, click on OK.</p>
            <img src={require('../assets/maven/setup-step4-4.png')} alt='step-4' className='screenshote'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Verification
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>
            <p className='box-text'>In the command prompt, type in <i>mvn -v</i> and run it.</p>
            <img src={require('../assets/maven/verify-step5.png')} alt='step-5' className='screenshots'/>
            <img src={require('../assets/maven/verify-step5-1.png')} alt='step-5' className='screenshots'/>
            <p className='box-text'>You have successfully installed Maven.</p>

            
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Maven