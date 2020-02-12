import React from "react";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div id="contact-wrapper">
          <div id="contact-bg-img"></div>
          <div id="contact-content">
            <form name="contact" netlify>
              <label>Message Me! </label>
              <br />
              <input type="text-area" name="mail-content" />
              <br />
              <label>Name </label>
              <br />
              <input type="text" name="name" />
              <br />
              <label>Email </label>
              <br />
              <input type="email" name="email" />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
