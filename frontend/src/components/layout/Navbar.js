import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import avatar from '../../assets/avatar.png';

import './Navbar.css';

function Navbar(){
    const [ menuIsClick, setMenuIsClick ] = useState(false);
    const { user, setUser } = useContext(UserContext);
    function clickHandler(){
        setMenuIsClick(!menuIsClick);
    }

    return (            
        <nav className='nav'>
            <div className='nav-left'>
                <div className='nav-menu-icon' onClick={clickHandler}>
                    <i className={ menuIsClick ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className='nav-logo'>
                    <Link to='/'>CapBA</Link>
                </div>
                <ul className={menuIsClick ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link to='/analyse'>Analyse</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'>About us</Link>
                    </li>
                </ul>
            </div>
            <div className='nav-right'>
                { user.id ? 
                    <div className='profile'>
                        <img src={avatar}/>
                        <h1>{user.id}</h1>
                    </div>
                    :
                    <ul className={menuIsClick ? 'nav-login active' : 'nav-login'}>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='nav-special-menu'>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar;