import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {

  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)

    setEmail('');
    setTextarea('');
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea placeholder='Massage' value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
          <button type='submit' >Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact