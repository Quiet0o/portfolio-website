import React, { useState } from "react";
// import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubject("");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form-page" id="contact">
      <div class="title">
        <h2>
          <span>0.3</span> Contact <hr />
        </h2>
        <p>
          You can also reach us with your query like which WordPress themes are
          best suited for you business niches or which WordPress hosting is best
          suited for your website. We feel free to assist you as long as
          possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} id="contact-form" className="contact-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            class="form-control"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            class="form-control"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Subject"
            class="form-control"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="6"
            placeholder="Message"
            class="form-control"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div id="submit" class="">
          <input
            type="submit"
            id="contact-submit"
            class="btn btn-default submit-button"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
