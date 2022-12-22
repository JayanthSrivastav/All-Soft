import './App.css';
// import { Grid } from '@mui/material';
import Grid from './Card';
// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//   gridContainer: {
//     paddingLeft: '20px',
//     paddingRight: '20px'
//   }
// });

function App() {
  // const classes = useStyles();
  return (
    
    <div className="App">
      <div className="App-header">
        <div className="Heading"><h1>Welcome home.</h1></div>
        <div className="Subheading">Well, every software and stuff.</div>

        {/* Let's use stepper */}

        {/* <Box className="Cards" width="300px"> */}
        {/* <Grid container spacing={4} className="gridContainer">
          <Grid item xs={6} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card />
          </Grid>
        </Grid> */}
        
        <Grid className="gridStyle" />
        {/* </Box> */}
      </div>
    </div>
  );
}

export default App;
