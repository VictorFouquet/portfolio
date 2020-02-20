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
          <a
            className="drop-down-item"
            href="#jumbotron"
            onClick={this.toggleMenu}
          >
            <div className="nav-icon">
              <HomeIcon />
            </div>
            Home
          </a>
          <a className="drop-down-item" href="#about" onClick={this.toggleMenu}>
            <div className="nav-icon">
              <ProfileIcon />
            </div>
            About
          </a>
          <a className="drop-down-item" href="#skills" onClick={this.toggleMenu}>
            <div className="nav-icon">
              <SkillsIcon />
            </div>
            Skills
          </a>
          <a className="drop-down-item" href="#work" onClick={this.toggleMenu}>
            <div className="nav-icon">
              <WorkIcon />
            </div>
            Work
          </a>
          <a className="drop-down-item" href="#extra" onClick={this.toggleMenu}>
            <div className="nav-icon">
              <ArtIcon />
            </div>
            Artwork
          </a>
          <a className="drop-down-item" href="#contact" onClick={this.toggleMenu}>
            <div className="nav-icon">
              <ContactIcon />
            </div>
            Contact
          </a>
        </div>
      );
    }
    return (
      <div>
        <div id="navbar">
          <div id="logo-icon-container">
            <a className="nav-icon" href="#jumbotron">
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
