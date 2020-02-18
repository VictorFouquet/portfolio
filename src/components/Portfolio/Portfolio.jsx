import React from "react";
import SideBar from '../SideBar/SideBar';
import Sections from '../Sections/Sections';
import NavBar from '../NavBar/NavBar'
class Portfolio extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        theme: "dark"
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(){
      console.log(this.state.theme)
      this.state.theme === "dark" ? this.setState({theme: "light"}) : this.setState({theme: "dark"})
  }

  render() {
    var nav;
    if (window.innerWidth < 500) {
      nav = <NavBar />
    } else {
      nav = <SideBar />
    }
    return <div id="portfolio">
      {nav}
      <Sections theme={this.state.theme} />
    </div>;
  }
}

export default Portfolio;
