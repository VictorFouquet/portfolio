import React from "react";
import MyLogo from '../../svgIcons/MyLogo';
import HomeIcon from '../../svgIcons/HomeIcon';
import ProfileIcon from '../../svgIcons/ProfileIcon';
import SkillsIcon from '../../svgIcons/SkillsIcon';
import WorkIcon from '../../svgIcons/WorkIcon';
import ArtIcon from '../../svgIcons/ArtIcon';
import ContactIcon from '../../svgIcons/ContactIcon';
import LinkedInIcon from '../../svgIcons/LinkedInIcon';
import GitHubIcon from '../../svgIcons/GitHubIcon';
import LightThemeIcon from '../../svgIcons/LightThemeIcon';
import "./navbar.css";
import Contact from "../Contact/Contact";

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <div id="logo-icon-container">
        <a className="logo-icon" href="#jumbotron">
          <MyLogo />
        </a>
        </div>
        <a className="nav-icon" href="#jumbotron"><HomeIcon /></a>
        <a className="nav-icon" href="#about"><ProfileIcon /></a>
        <a className="nav-icon" href="#skills"><SkillsIcon /></a>
        <a className="nav-icon" href="#work"><WorkIcon /></a>
        <a className="nav-icon" href="#extra"><ArtIcon /></a>
        <a className="nav-icon" href="#contact"><ContactIcon /></a>
        <div id="ext-website-icon-nav-bar">
          <a className="nav-icon" href="https://www.linkedin.com/in/v-fouquet/" target="blank"><LinkedInIcon /></a>
          <a className="nav-icon" href="https://github.com/VictorFouquet" target="blank"><GitHubIcon /></a>
        </div>
      </div>
    );
  }
}

export default NavBar;
