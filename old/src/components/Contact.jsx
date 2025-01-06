import React from "react";

function Contact() {

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <h1>Reaching out to Melissa:</h1>
      </div>
      <div className="profile-text">
      <ul>
          <li>
            <b>Email: </b><a href="mailto:melissa@melissa-longenberger.com">melissa@melissa-longenberger.com</a>
          </li>
          <li>
            <b>Phone: </b><a href="tel:1-570-221-9892">570-221-9892</a>
          </li>
          <li>
              <b>LinkedIn: </b><a href="https://www.linkedin.com/in/melissa-longenberger/" target="_blank">My Profile on LinkedIn</a>
          </li>
          <li>
              <b>GitHub (Personal): </b><a href="https://github.com/melissa-24" target="_blank">Personal GitHub Portfolio</a>
          </li>
          <li>
              <b>GitHub (Business): </b><a href="https://github.com/beedev-itservices" target="_blank">Main Business GitHub</a>
            </li>
            <li>
                <b>GitHub (Other Business): </b><a href="https://github.com/BeeDev-IT-Services-Coding-DoJo" target="_blank">Business GitHub focused on learning</a>
            </li>
            <li>
              <b>Business Website: </b><a href="https://beedev-itservices.com" target="_blank">BeeDev IT Services Website</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
