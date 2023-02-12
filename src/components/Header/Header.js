import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/location'>Location</Link>
                <Link to='/about'>About Us</Link>
            </nav>


        </div>
    );
};

export default Header;