import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gtgnmfd', 'template_eqffviw', form.current, '3SIY15pXzO8NwTgMM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container ">
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name='name' placeholder='Please Your Full Name' required />
                    <input type="email" name='email' placeholder='Please Email' required />
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;