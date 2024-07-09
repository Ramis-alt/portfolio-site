import React from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com' 

const Contact = () => {
    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wwts3qb', 'template_7uokeqb', form.current, 'c4e4LyNVoc5nwpZOV')
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      };

  return (
<div className="form--container--styling">
    <h2>Get in Touch</h2>
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-row">
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" id="user_name"/>
    </div>
    <div className="form-row">
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email"/>
    </div>
    <div className="form-row">
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
    </div>
    <button type='submit'>Send</button>
  </form>
</div>
  )
}

export default Contact
