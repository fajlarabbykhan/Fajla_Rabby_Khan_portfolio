import React from 'react';
import "./nav.css"
import { AiFillHome } from 'react-icons/ai'
import { FaUserCheck } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { MdContactMail } from 'react-icons/md'
const Nav = () => {
    return (
        <nav>
            <a href="#"><AiFillHome /></a>
            <a href="#about"><FaUserCheck /></a>
            <a href="#services"><RiServiceFill /></a>
            <a href="#contact">< MdContactMail /></a>
        </nav>
    );
};

export default Nav;