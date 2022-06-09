import React from 'react';
import resume from '../../Assets/Resume-Fajla Rabby Khan.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={resume} download className='btn'>Review CV</a>
            <a href='#contact' className=' btn '>Contact</a>
        </div>
    );
};

export default CTA;