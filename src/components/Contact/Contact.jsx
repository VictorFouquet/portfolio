import React from "react";
import "./contact.css";
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div id="contact">
        <div id="contact-wrapper">
          <div id="contact-bg-img"></div>
          <div id="contact-content">
            <h1 className="contact-title">Contact</h1>
            <div id="contact-wrapper">
              <form onSubmit={this.handleSubmit} id='form-custom'>
                <h2>
                  <label>Message Me! </label>
                </h2>
                <br />
                <textarea
                  id="message-area"
                  type="textarea"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                />
                <br />
                <label>Name </label>
                <br />
                <input className='contact-input' type="text" name="name" value={name} onChange={this.handleChange}/>
                <br />
                <label>Email </label>
                <br />
                <input className='contact-input' type="email" name="email" value={email} onChange={this.handleChange}/>
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
