import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Translations from '../../Data/data.json'
import Logo from '../../assets/logo/logo.png';
import './Footer.css'
const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className='footerMain'>
            <div className='footerContainer'>
                <div className='btnWrap' >
                    <a className="btn btn-primary download-btn" href='/en'>{t('reply')}</a>
                </div>
                <div className="fcontainer">
                    <div className="flogo-container">
                        <img src='https://gea-eid-p2.stocker.team/static/media/EGA_Logo_ar.4f7b9717ae9787a6c91c.png' alt="Logo 1" className="flogo" />
                    </div>
                    <div className="fdivider"></div>
                    <div className="flogo-container">
                        <img src={Logo} alt="Logo 2" className="flogo" />
                    </div>
                </div>
                <div class="overlayFooter">
                </div>
            </div>
        </footer>
    )
}

export default Footer
