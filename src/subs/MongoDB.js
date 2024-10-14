import React from 'react';
import { Typography, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import '../App.css';

const MongoDB = () => {
  return (
    <div className='BGCanvas'>
      <Box sx={{ width: '80%', marginTop: '2vh', boxShadow: 3 }}>
        
        <div className='box-div'>
          <div className='Tool' >
            <a href='https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html' target='_blank' rel="noreferrer">
              <img src='' alt='mongodb' width='40%' className='IMU' ></img>
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
            <p className='box-text'>Go to <i>MongoDB</i>'s Community Edition <a href='https://www.mongodb.com/try/download/community' target='_blank' rel="noreferrer">website</a> to download.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/download-step1.png')} alt='step-1' className='screenshots'/>
            <Divider className='custom-divider'/>
            <p className='box-text'>Scroll down. Select the latest version, platform and download the msi package.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/download-step1-1.png')} alt='step-1-1' className='screenshots'/>

            <Typography variant='h3'component='h3' className='box-heading'>
              Setting up
            </Typography>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 2
            </Typography>
            <p className='box-text'>Open the installer.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step2.png')} alt='step-2' className='screenshots' />
            
            <Divider className='custom-divider'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 3
            </Typography>
            <p className='box-text'>Click Next to continue.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3.png')} alt='step-3' className='screenshote'/>

            <Divider className='custom-divider'/>

            <p className='box-text'>Accept the terms and click on Next.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-1.png')} alt='step-3-1' className='screenshote'/>

            <Divider className='custom-divider'/>

            <p className='box-text'>Click on <i>Complete</i> button for Complete Installation or otherwise for custom features.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-2.png')} alt='step-3-2' className='screenshote'/>

            <Divider className='custom-divider'/>

            <p className='box-text'>Check <i>Install MongoD as a Service</i> and select <i>Run service as Network Service user</i> and click on Next.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-3.png')} alt='step-3-3' className='screenshote'/>

            <Divider className='custom-divider'/>
            
            <p className='box-text'>Check <i>Install MongoDB Compass</i> and click on Next.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-4.png')} alt='step-3-4' className='screenshote'/>

            <Divider className='custom-divider'/>
            
            <p className='box-text'>Click on <i>Install</i> to begin the installation,</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-5.png')} alt='step-3-5' className='screenshote'/>

            <Divider className='custom-divider'/>
            
            <p className='box-text'>and wait until the installation is complete.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-7.png')} alt='step-3-7' className='screenshote'/>

            <Divider className='custom-divider'/>
            
            <p className='box-text'>Now, click on Finish to exit the Setup Wizard.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step3-8.png')} alt='step-3-8' className='screenshote'/>

            <Divider className='custom-divider'/>

            <Typography variant='h4'component='h4' className='box-s-heading'>
              Step 4
            </Typography>

            <p className='box-text'>Open MongoDB Compass.</p>
            <img src={require('../assets/mongo/compassandmongodbcommunity/setup-step4.png')} alt='step-4' className='screenshots'/>

            <p className='box-text'>You have successfully installed MongoDB Compass.</p>

          </div>
        </div>
      </Box>
    </div>
  )
}

export default MongoDB