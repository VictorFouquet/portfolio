import React from "react";
import "./contact.css";
import MyLogo from "../../svgIcons/MyLogo";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div id="contact-wrapper">
          <div id="contact-bg-img"></div>
          <div id="contact-content">
            <h1 className="contact-title">Contact</h1>
            <div id="contact-wrapper">
              <form name="contact" netlify>
                <h2>
                  <label>Message Me! </label>
                </h2>
                <br />
                <textarea
                  id="message-area"
                  type="textarea"
                  name="mail-content"
                />
                <br />
                <label>Name </label>
                <br />
                <input type="text" name="name" />
                <br />
                <label>Email </label>
                <br />
                <input type="email" name="email" />
                <br />
                
                <button className="send-message-button" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
