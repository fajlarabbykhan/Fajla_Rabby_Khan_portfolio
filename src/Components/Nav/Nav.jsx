import React from 'react';
import "./nav.css"
import { AiFillHome } from 'react-icons/ai'
import { FaUserCheck } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { MdContactMail } from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
    const [activeNav, setActivenav] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActivenav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
            <a href="#about" onClick={() => setActivenav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserCheck /></a>
            <a href="#services" onClick={() => setActivenav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceFill /></a>
            <a href="#contact" onClick={() => setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>< MdContactMail /></a>
        </nav>
    );
};

export default Nav;