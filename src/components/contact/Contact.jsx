import { useState } from 'react';
import './Contact.scss';
// require('dotenv').config();

export default function Contact() {
  const [message, setMessage] = useState(false);
  const url = process.env.REACT_APP_FROMSPREE;

  const handleSubmit = (e) => {
    // e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Feel Free To Contact :)</h2>
        <form action={url} method="POST" onSubmit={handleSubmit}>
          <input type="text" name="Email" placeholder="Email" />
          <textarea
            name="Message"
            placeholder="Message"
            rows="6"
            cols="30"
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll Reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
