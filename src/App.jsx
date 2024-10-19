import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { Grid } from '@mui/material';
// import Grid from './Card';
import Navbar from './subs/Navbar';
import Home from './subs/Home';
import Ngrok from './subs/Ngrok';
import Java from './subs/Java';
import Maven from './subs/Maven';
import Tomcat from './subs/Tomcat';
import Spring from './subs/Spring';
import MongoDB from './subs/MongoDB';
import Postman from './subs/Postman';
import Node from './subs/Node';
import VSC from './subs/VSC';
import GitHub from './subs/GitHub';
// import Rct from './subs/Rct';
// import Bootstrap from './subs/Bootstrap';
// import MUI from './subs/MUI';
// import Axios from './subs/Axios';
// import NPMCommands from './subs/NPMCommands';
import NotFound from './subs/NotFound';
import { useState } from 'react';


function App() {
  // const classes = useStyles();
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="nav"/>
      <Routes>
        <Route exact path='/' element={<Home selectedPage={selectedPage} />} />
        <Route exact path='/ngrok' element={<Ngrok />} />
        <Route exact path='/java' element={<Java />} />
        <Route exact path='/maven' element={<Maven />} />
        <Route exact path='/tomcat' element={<Tomcat />} />
        <Route exact path='/spring-boot' element={<Spring />} />
        <Route exact path='/mongoDB' element={<MongoDB />} />
        <Route exact path='/postman' element={<Postman />} />
        <Route exact path='/nodejs' element={<Node />} />
        <Route exact path='/vsc' element={<VSC />} />
        <Route exact path='/github' element={<GitHub />} />
        {/* <Route exact path='/react' element={<Rct />} /> */}
        {/* <Route exact path='/bootstrap' element={<Bootstrap />} /> */}
        {/* <Route exact path='/mui' element={<MUI />} /> */}
        {/* <Route exact path='/axios' element={<Axios />} /> */}
        {/* <Route exact path='/npm' element={<NPMCommands />} /> */}
        <Route path = '*' element={<NotFound />} />
      </Routes>

      
      {/* <div className="App-header">
        <div className="Heading"><h1>Welcome home.</h1></div>
        <div className="Subheading">Well, every software and stuff.</div> */}

        {/* Let's use stepper */}
        
        {/* <Grid className="gridStyle" /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
