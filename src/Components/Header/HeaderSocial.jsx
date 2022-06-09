import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/fajla-rabby-khan/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/fajlarabbykhan" target="_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/fajlarabbykhan1" target="_blank"><AiFillFacebook /></a>
        </div>
    );
};

export default HeaderSocial;