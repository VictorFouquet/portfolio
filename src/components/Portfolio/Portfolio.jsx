import React from "react";
import NavBar from '../NavBar/NavBar';
import Sections from '../Sections/Sections';

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
    return <div id="portfolio">
      <NavBar theme={this.state.theme} handleTheme={this.changeTheme}/>
      <Sections theme={this.state.theme} />
    </div>;
  }
}

export default Portfolio;
