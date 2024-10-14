import React from 'react'
import Grid from './Card';
// import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="App-header">
            {/* <Navbar className="nav"/> */}
            <div className="Heading"><h1>Welcome home.</h1></div>
            <div className="Subheading">Well, every software and stuff.</div>

            {/* Let's use stepper */}

            {/* <Grid className="gridStyle" /> */}
            <Grid className="gridStyle" />
        </div>

        
    )
}

export default Home