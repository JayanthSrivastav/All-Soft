import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, CardMedia, CardActionArea } from '@mui/material';
// import { useState } from 'react';
// import {Routes, Route} from 'react-router-dom';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );


export default function BasicCard() {
  return (
    <Grid container spacing={4} className="gridContainer">
      {/* <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardActionArea href='https://www.google.com'>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid> */}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/ngrok'>
            <CardMedia
              sx={{ height: 180 }}
              image="http://www.endtoend.ai/assets/blog/tutorial/ngrok-ssh-forwarding/ssh_ngrok.jpg"
              title="ngrok"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ngrok
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/java'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://www.oracle.com/img/tech/cb88-java-logo-001.jpg"
              title="Java"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Java
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/maven'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://user-images.githubusercontent.com/88981/188587693-5710e58b-c1ad-442c-ac06-e1aeab30a905.png"
              title="Maven"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Maven
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/tomcat'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://nsfocusglobal.com/wp-content/uploads/2019/04/apachetomcat.jpg"
              title="Tomcat"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tomcat
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/spring-boot'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://cdn.hashnode.com/res/hashnode/image/upload/v1636832404785/mTXlsmro-.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              title="Spring Boot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Spring Boot
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/mongoDB'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
              title="MongoDB"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MongoDB
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/postman'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://miro.medium.com/max/894/1*0jyROv8ksMb6tZtlf2ewVQ.png"
              title="Postman"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Postman
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/nodejs'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://www.devteam.space/wp-content/uploads/2022/05/nodejs.jpg"
              title="Node.js"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Node.js
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/vsc'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://code.visualstudio.com/opengraphimg/opengraph-blog.png"
              title="Visual Studio Code"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Visual Studio Code
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='/github'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://miro.medium.com/max/1400/1*SSRjtoQ0H2X3SBPOiJ5rZw.jpeg"
              title="GitHub"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                GitHub
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='https://create-react-app.dev/' target='_blank' rel='noopener noreferrer'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
              title="React"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='https://getbootstrap.com/' target='_blank' rel='noopener noreferrer'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://getbootstrap.com/docs/5.2/assets/img/bootstrap-icons.png"
              title="Bootstrap"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bootstrap
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='https://mui.com/material-ui/' target='_blank' rel='noopener noreferrer'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png"
              title="Material UI"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Material UI
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='https://www.npmjs.com/package/axios' target='_blank' rel='noopener noreferrer'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://linuxhint.com/wp-content/uploads/2022/01/word-image-1086.png"
              title="Axios"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Axios
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#171f24", color: "#03dac5" }}>
          <CardActionArea href='https://docs.npmjs.com/cli/v6/commands' target='_blank' rel='noopener noreferrer'>
            <CardMedia
              sx={{ height: 180 }}
              image="https://miro.medium.com/max/1400/1*sO5oyZhvbI0cW3SrZ9ZwCA.png"
              title="npm commands"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                npm commands
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
