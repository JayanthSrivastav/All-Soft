import React from 'react';
import BasicCard from './Card';
import SearchBar from './SearchBar';
// import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="App-header">
            {/* <Navbar className="nav"/> */}
            <div className="Heading"><h1>Welcome home.</h1></div>
            <div className="Subheading">Well, every software and stuff.</div>

            
            <div><SearchBar /></div>
            {/* Let's use stepper */}

            {/* <Grid className="gridStyle" /> */}
            <BasicCard className="gridStyle" />
        </div>

        
    )
}

export default Home