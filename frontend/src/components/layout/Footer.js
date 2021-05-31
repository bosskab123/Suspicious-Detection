import React from 'react';
import Icon from '../icons';
import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className='footer-row'>
                    <div className='footer-column'>
                        <p className='footer-title'>About us</p>
                        <Link to='/' className="footer-link">Story</Link>
                        <Link to='/' className="footer-link">Network</Link>
                        <Link to='/' className="footer-link">Collaboration</Link>
                    </div>
                    <div className='footer-column'>
                        <p className='footer-title'>Services</p>
                        <Link to='/' className="footer-link">Marketing</Link>
                        <Link to='/' className="footer-link">Consulting</Link>
                        <Link to='/' className="footer-link">Development</Link>
                        <Link to='/' className="footer-link">Design</Link>
                    </div>
                    <div className='footer-column'>
                        <p className='footer-title'>Contact us</p>
                        <Link to='/' className="footer-link">Thailand</Link>
                        <Link to='/' className="footer-link">Singapore</Link>
                        <Link to='/' className="footer-link">Korea</Link>
                        <Link to='/' className="footer-link">Japan</Link>
                    </div>
                    <div className='footer-column'>
                        <p className='footer-title'>Social</p>
                        <Link to='/' className="footer-link"><Icon className="fab fa-facebook-f"/>Facebook</Link>
                        <Link to='/' className="footer-link"><Icon className="fab fa-instagram"/>Instagram</Link>
                        <Link to='/' className="footer-link"><Icon className="fab fa-youtube"/>Youtube</Link>
                        <Link to='/' className="footer-link"><Icon className="fab fa-twitter"/>Twitter</Link>
                    </div>
                </div>
            </div>                    
        </div>
    )
}

export default Footer;