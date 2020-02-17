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
              <div>Coded and Designed by Victor Fouquet - 2020</div>
              <div>
                All images and illustrations on this website are the copyrighted
                property of their respective owners
              </div>
              <div>
                and may not be used without express permission from the owner.
              </div>
              <div id="icon-footer-container">
                <LinkedInIcon />
                <GitHubIcon />
                <CodePenIcon />
                <CodeWarsIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
