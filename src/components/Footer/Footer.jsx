import React from "react";
import "./footer.css";
import LinkedInIcon from "../../svgIcons/LinkedInIcon";
import GitHubIcon from "../../svgIcons/GitHubIcon";
import CodePenIcon from "../../svgIcons/CodePenIcon";
import CodeWarsIcon from "../../svgIcons/CodeWarsIcon";
import InstagramIcon from "../../svgIcons/InstagramIcon";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-wrapper">
          <div id="footer-bg-img"></div>
          <div id="footer-content">
            <div id="footer-content-wrapper">
              <p>Code and Design by Victor Fouquet - 2020<br/>
                All images and illustrations on this website are the copyrighted
                property of their respective owners
                and may not be used without express permission from the owner.
              </p>
              <div id="icon-footer-container">
                <a className="nav-icon" href="https://www.linkedin.com/in/v-fouquet/" target="blank">
                  <LinkedInIcon />
                </a>
                <a className="nav-icon" href="https://github.com/VictorFouquet" target="blank">
                  <GitHubIcon />
                </a>

                <a className="nav-icon" href="https://codepen.io/victorfouquet" target="blank">
                  <CodePenIcon />
                </a>

                <a className="nav-icon" href="https://www.codewars.com/users/VictorFouquet" target="blank">
                  <CodeWarsIcon />
                </a>
                <a className="nav-icon" href="https://www.instagram.com/victor.fouquet.artist/" target="blank">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
