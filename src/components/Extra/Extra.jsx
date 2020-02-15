import React from "react";
import "./extra.css";
import img1 from "../../assets/art/1.png";
import img2 from "../../assets/art/2.png";
import img3 from "../../assets/art/3.png";
import img4 from "../../assets/art/4.png";
import img5 from "../../assets/art/5.png";
import img6 from "../../assets/art/6.png";
import img7 from "../../assets/art/7.png";
import img8 from "../../assets/art/8.png";
import img9 from "../../assets/art/9.png";
import img10 from "../../assets/art/10.png";
import img11 from "../../assets/art/11.png";
import img12 from "../../assets/art/12.png";
import img13 from "../../assets/art/13.png";
import img14 from "../../assets/art/14.png";
import img15 from "../../assets/art/15.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import bgIllu from "../../assets/bgIllu.png";

class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clName: "img",
      pics: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15
      ]
    };
    this.handleLeftSlide = this.handleLeftSlide.bind(this);
    this.handleRightSlide = this.handleRightSlide.bind(this);
  }

  handleLeftSlide = () => {
    this.setState({ clName: "left-out" });
    let provPics = [...this.state.pics];
    provPics.unshift(provPics.pop());

    setTimeout(() => {
      this.setState({ pics: [...provPics], clName: "left-in" });
    }, 500);
  };

  handleRightSlide = () => {
    this.setState({ clName: "right-out" });
    let provPics = [...this.state.pics];
    provPics.push(provPics.shift());
    setTimeout(() => {
      this.setState({ pics: [...provPics], clName: "right-in" });
    }, 500);
  };

  render() {
    var anim = this.state.animating ? "img-animating" : "img";
    return (
      <div id="extra">
        <div id="extra-wrapper">
          <div id="extra-bg-img">
            <img id="extra-illu-btm" src={bgIllu} alt="ça marche ap"></img>
          </div>
          
          <div id="extra-content">
          <h1 id="artworks-title">Artworks</h1>
            <div id="slider-btn-ctn">
              <div id="slider">
                <div id="pics-container">
                  <div className="img-container">
                    <img
                      className={this.state.clName}
                      src={this.state.pics[0]}
                      alt="ça marche ap"
                    ></img>
                  </div>
                </div>
              </div>
              <div id="arrows-container">
                <div id="left-arr-ctn" onClick={this.handleLeftSlide}>
                  <img
                    className="arrow"
                    src={leftArrow}
                    alt="ça marche ap"
                  ></img>
                </div>

                <div id="right-arr-ctn" onClick={this.handleRightSlide}>
                  <img
                    className="arrow"
                    src={rightArrow}
                    alt="ça marche ap"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Extra;
