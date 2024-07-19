import React, { useState } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import Sound from '../Sound/Sound';
import Translation from '../Translation/Translation';
import Logo from '../../assets/logo/logo.png';
import './Header.css';

const Header = () => {
    
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-content">
                    <div className="left">
                        <div class="button-container">
                            <div className='btn-space'> <Translation /></div>
                            <div className='btn-space'> <Sound /></div>
                        </div>
                    </div>  
                    <div className="center">
                        <img src={Logo} alt="Center Image" />
                    </div>
                    <div className="right">
                        <DarkMode />
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </header>
    );
}

export default Header;
