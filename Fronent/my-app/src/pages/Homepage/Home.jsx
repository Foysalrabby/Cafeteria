import React from 'react';
import './Home.css';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Header/Header';
import Footter from '../../component/Footter/Footter';
const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Footter/>
        </div>
    );
};

export default Homepage;