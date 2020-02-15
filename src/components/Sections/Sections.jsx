import React from "react";
import "./sections.css";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Extra from '../Extra/Extra';
import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';

class Sections extends React.Component {
  render() {
    return <div id="sections">
      <Jumbotron />
      <About />
      <Skills />
      <Work />
      <Extra />
      <Contact />
      <Footer />
    </div>;
  }
}

export default Sections;
