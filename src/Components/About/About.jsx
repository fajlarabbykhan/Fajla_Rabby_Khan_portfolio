import React from 'react';
import "./about.css"
import MyPic from '../../Assets/me.png'
// import { FaAward } from 'react-icons/fa'
// import { FaUserFriends } from 'react-icons/fa'
// import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
    return (
        <section id='about'>
            {/* <h5>Get More</h5>
            <h2>About Me</h2> */}
            <div className="container about__container">
                <div className="about__me-image">
                    <img src={MyPic} alt="my profile pic" />
                </div>

            </div>

        </section>
    );
};

export default About;