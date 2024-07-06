import React from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com' 

const Contact = () => {
    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wwts3qb', 'template_7uokeqb', form.current, {
            publicKey: 'AK7LFJWYhzHIdhFl9',
          })
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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name'/>
        <label>Email</label>
        <input type="email" name='user_email'/>
        <label>Message</label>
        <textarea name='message'/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
