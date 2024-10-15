import React from 'react';
import { Typography, Box } from '@mui/material';
// import PropTypes from 'prop-types';
import '../App.css';

const Tomcat = () => {
  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
        
        <div className='box-div'>
          <div className='Tool' >
            <a href='https://tomcat.apache.org/download-10.cgi' target='_blank' rel="noreferrer">
              <img src='https://nsfocusglobal.com/wp-content/uploads/2019/04/apachetomcat.jpg' alt='maven' width='40%' className='IMU' ></img>
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
            <p className='box-text'>Go to <i>Tomcat</i>'s <a href='https://tomcat.apache.org/download-10.cgi' target='_blank' rel="noreferrer">official website</a>.</p>
            <img src={require('../assets/tomcat/download-step1.png')} alt='step-1' className='screenshots'/>

            <p className='box-text'>Download the <i>zip archive</i> of the latest version. </p>
            <img src={require('../assets/tomcat/download-step1-1.png')} alt='step-1' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Setting up
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <p className='box-text'>Extract the downloaded archive and copy the extracted folder.</p>
            <img src={require('../assets/tomcat/download-step2.gif')} alt='step-2' className='screenshots' />

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <p className='box-text'>Paste the folder into the desired location. Often placed in the <i>C://</i> drive and then, open the folder.</p>
            <img src={require('../assets/tomcat/setup-step3.gif')} alt='step-3' className='screenshots'/>
            <p className='box-text'>You will find a folder named <i>apache-tomcat-version</i>. In this case, <i>apache-tomcat-10.0.27</i>. Open the folder. </p>
            <img src={require('../assets/tomcat/setup-step3-2.png')} alt='step-3' className='screenshots'/>

            <p className='box-text'>Open the <i>bin</i> folder.</p>
            <img src={require('../assets/tomcat/verify-step4.png')} alt='step-3' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Verification
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>
            
            <p className='box-text'>Open command prompt from the <i>bin</i> folder.</p>
            <img src={require('../assets/tomcat/verify-step4-1.png')} alt='step-4' className='screenshots'/>
            <img src={require('../assets/tomcat/verify-step4-2.png')} alt='step-4' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>

            <p className='box-text'>Enter <i>startup</i> and run it.</p>
            <img src={require('../assets/tomcat/verify-step4-3.png')} alt='step-4' className='screenshots'/>
            <img src={require('../assets/tomcat/verify-step4-4.png')} alt='step-4' className='screenshots'/>

            <p className='box-text'>A tomcat terminal opens up and the session for the given port number is started. (Don't close it.)</p>
            <img src={require('../assets/tomcat/verify-step4-5.png')} alt='step-4' className='screenshots'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 5
            </Typography>
            <p className='box-text'>To verify it's running, open a browser and search <a href='localhost:8080'>localhost:8080</a> where 8080 is the port number.</p>
            <img src={require('../assets/tomcat/verify-step4-6.png')} alt='step-5' className='screenshots'/>

            <p className='box-text'>You have successfully installed Tomcat.</p>

          </div>
        </div>
      </Box>
    </div>
  )
}

export default Tomcat