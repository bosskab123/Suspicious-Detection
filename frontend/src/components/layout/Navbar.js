import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from '../Button';
import './Navbar.css';

function Navbar(){
    const [ menuIsClick, setMenuIsClick ] = useState(false);

    function clickHandler(){
        setMenuIsClick(!menuIsClick);
    }

    return (            
        <nav className='nav'>
            <div className='nav-menu-icon' onClick={clickHandler}>
                <i className={ menuIsClick ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className='nav-logo'>
                <Link to='/'>Suspicious Detector</Link>
            </div>
            <ul className={menuIsClick ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/aboutus'>About us</Link>
                </li>
            </ul>
            <ul className={menuIsClick ? 'nav-login active' : 'nav-login'}>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li className='nav-special-menu'>
                    <Link to='/signup'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;