import React from 'react';
import BasicCard from './Card';
import SearchBar from './SearchBar';
// import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="App-header">
            {/* <Navbar className="nav"/> */}
            <div className="Heading"><h1>all-soft</h1></div>
            <div className="Subheading">An installation guide to every programming software and tool I use.</div>

            
            <div><SearchBar /></div>
            {/* Let's use stepper */}

            {/* <Grid className="gridStyle" /> */}
            <BasicCard className="gridStyle" />
        </div>

        
    )
}

export default Home