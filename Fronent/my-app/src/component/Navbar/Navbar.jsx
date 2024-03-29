import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
        <div className='Navbarcontainer'>
        <span className='Navbarlogo'> Cafetria</span>
        <div className='navitem'>
        <span>Service </span>
        <span>Contact</span>
        <span> About us</span>
        <button className='navButton'> Singup</button>
        <button className='navButton'> LogIn</button>
        </div>


        </div>



            
        </div>
    );
};

export default Navbar;