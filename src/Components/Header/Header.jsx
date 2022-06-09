import React from 'react';
import "./header.css"
import CTA from './CTA';
import profilephoto from '../../Assets/me.png'
import HeaderSocial from './HeaderSocial';
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi, This is </h5>
                <h1>Fajla Rabby Khan</h1>
                <h5 className="text-light"> Full Stack Web Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="profile-pic">
                    <img src={profilephoto} alt="Profile Pic" />
                </div>
                {/* <a href="#contact" className='scrol_down' >Scroll Down</a> */}
            </div>
        </header>
    );
};

export default Header;