import React from "react";
import MyLogo from "../../svgIcons/MyLogo";
import HomeIcon from "../../svgIcons/HomeIcon";
import ProfileIcon from "../../svgIcons/ProfileIcon";
import SkillsIcon from "../../svgIcons/SkillsIcon";
import WorkIcon from "../../svgIcons/WorkIcon";
import ArtIcon from "../../svgIcons/ArtIcon";
import ContactIcon from "../../svgIcons/ContactIcon";
import "./navbar.css";
import NavBarIcon from "../../svgIcons/NavBarIcon";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggled: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuToggled: !this.state.menuToggled
    });
  }

  render() {
    var menu;
    if (this.state.menuToggled) {
      menu = (
        <div id="menu" className="dropdown-ctn">
          <div className="drop-down-item">
            <a className="nav-bar-dropdown-icon" href="#jumbotron" onClick={this.toggleMenu}>
              <HomeIcon />
            </a>
            Home
          </div>
          <div className="drop-down-item" >
            <a className="nav-bar-dropdown-icon" href="#about" onClick={this.toggleMenu}>
              <ProfileIcon  />
            </a>
            About
          </div>
          <div className="drop-down-item">
            <a className="nav-bar-dropdown-icon" href="#skills" onClick={this.toggleMenu}>
              <SkillsIcon />
            </a>
            Skills
          </div>
          <div className="drop-down-item">
            <a className="nav-bar-dropdown-icon" href="#work" onClick={this.toggleMenu}>
              <WorkIcon />
            </a>
            Work
          </div>
          <div className="drop-down-item">
            <a className="nav-bar-dropdown-icon" href="#extra" onClick={this.toggleMenu}>
              <ArtIcon />
            </a>
            Artwork
          </div>
          <div className="drop-down-item">
            <a className="nav-bar-dropdown-icon" href="#contact" onClick={this.toggleMenu}>
              <ContactIcon />
            </a>
            Contact
          </div>
        </div>
      );
    }
    return (
      <div>
        <div id="navbar">
          <div id="logo-icon-container">
            <a className="logo-icon" href="#jumbotron">
              <MyLogo />
            </a>
          </div>
          <div id="nav-menu-icon-container">
            <div className="nav-icon" onClick={this.toggleMenu}>
              <NavBarIcon />
            </div>
          </div>
        </div>
        {menu}
      </div>
    );
  }
}

export default NavBar;
