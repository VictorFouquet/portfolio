import React from "react";
import "./work.css";
import calc from "../../assets/calc.png";
import clock from "../../assets/clock.png";
import drumkit from "../../assets/drumkit.png";
import pomodoro from "../../assets/pomodoro.png";
import prisme from "../../assets/prisme.png";
import quotes from "../../assets/quotes.png";
import search from "../../assets/search.png";
import moon from "../../assets/moon.png";
import bgIllu from "../../assets/bgIllu.png";

class Work extends React.Component {
  render() {
    return (
      <div id="work">
        <div id="work-wrapper">
          <div id="work-bg-img-top">
            <img id="work-illu-top" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="work-bg-img-btm">
            <img id="work-illu-btm" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="work-content">
            <h1>Works :</h1>

            <div id="work-images-wrapper">
              <div id="website-projects">
                <div className=" overlay-image _bp wide">
                  <a href="http://www.prismeduc.com/" target="_blank">
                    <img className=" image _bq " src={prisme} alt="Alt text" />
                    <div className=" hover _br ">
                      <div className=" text _q ">
                        <div className="work-title">Prisme Educ</div>
                        <div>Website made for PACA French region academy</div>
                        <div>European scholar exchange program Erasmus+</div>
                        <div>
                          Created in association with
                          <a
                            className="associate"
                            href="https://www.linkedin.com/in/joshuan-spada-9b5559a2/"
                            target="_blank"
                          >
                            {" "}Joshuan Spada
                          </a>{" "}
                          and{" "}
                          <a
                            className="associate"
                            href="https://raphaelchillio.com/"
                            target="_blank"
                          >
                            Raphael Chilio-Costantin
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" overlay-image _bp wide">
                  <a href="http://to--the--moon.herokuapp.com/" target="_blank">
                    <img className=" image _bq " src={moon} alt="Alt text" />
                    <div className=" hover _br ">
                      <div className=" text _q ">
                        <div className="work-title">To the Moon</div>
                        <div>
                          Final project for The Hacking Project bootcamp
                        </div>
                        <div>
                          Cryptocurrency toolkit and social network platform
                        </div>
                        <div>
                          Selected amongst the 5 best projects of the study
                          group and publicly presented
                        </div>
                        <div>
                          Created in association with
                          <a
                            className="associate"
                            href="https://www.linkedin.com/in/joshuan-spada-9b5559a2/"
                            target="_blank"
                          >
                            {" "}Joshuan Spada
                          </a>{" "}
                          and{" "}
                          <a
                            className="associate"
                            href="https://raphaelchillio.com/"
                            target="_blank"
                          >
                            Raphael Chilio-Costantin
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div id="app-projects">
                <div className="app-project-row">
                  <div className=" overlay-image _bp third">
                    <a
                      href="https://codepen.io/victorfouquet/full/ExaqpKB"
                      target="_blank"
                    >
                      <img className=" image _bq " src={clock} alt="Alt text" />
                      <div className=" hover _br ">
                        <div className=" text _q ">
                          <div className="work-title">Analog Clock</div>
                          <div>
                            Minimalist design and handling time features
                          </div>
                          <div>freeCodeCamp Front-End Libraries project</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className=" overlay-image _bp third">
                    <a
                      href="https://my-pomodoro-clock.netlify.com"
                      target="_blank"
                    >
                      <img
                        className=" image _bq "
                        src={pomodoro}
                        alt="Pomodoro Clock"
                      />
                      <div className=" hover _br ">
                        <div className=" text _q ">
                          <div className="work-title">Pomodoro Clock</div>
                          <div className="work-legend">
                            Skeumorphic design and time handling features
                          </div>
                          <div className="work-legend">
                            freeCodeCamp Front-End Libraries project
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className=" overlay-image _bp third">
                    <a href="https://my-drumkit.netlify.com/" target="_blank">
                      <img
                        className=" image _bq "
                        src={drumkit}
                        alt="Alt text"
                      />
                      <div className=" normal _bs ">
                        <div className=" text _q "></div>
                      </div>
                      <div className=" hover _br ">
                        <div className=" text _q ">
                          <div className="work-title">Drum Kit</div>
                          <div className="work-legend">
                            Skeumorphic design and audio playing features
                          </div>
                          <div className="work-legend">
                            freeCodeCamp Front-End Libraries project
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="app-project-row">
                  <div className=" overlay-image _bp third">
                    <a
                      href="https://codepen.io/victorfouquet/full/PowrEwX"
                      target="_blank"
                    >
                      <img
                        className=" image _bq "
                        src={search}
                        alt="Alt text"
                      />
                      <div className=" normal _bs ">
                        <div className=" text _q "></div>
                      </div>
                      <div className=" hover _br ">
                        <div className=" text _q ">
                          <div className="work-title">BFS / DFS visualizer</div>
                          <div className="work-legend">
                            Searching algorithms visualizer
                          </div>
                          <div className="work-legend">Personnal project</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className=" overlay-image _bp third">
                    <a
                      href="https://my-random-quote-generator.netlify.com/"
                      target="_blank"
                    >
                      <img
                        className=" image _bq "
                        src={quotes}
                        alt="Alt text"
                      />
                      <div className=" normal _bs ">
                        <div className=" text _q "></div>
                      </div>
                      <div className=" hover _br ">
                        <div className=" text _q ">
                          <div className="work-title">
                            Random Quotes Generator
                          </div>
                          <div className="work-legend">
                            App that generates random quotes
                          </div>
                          <div className="work-legend">
                            freeCodeCamp Front-End Libraries project
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className=" overlay-image _bp third">
                    <a
                      href="https://my-first-calculator.netlify.com/"
                      target="_blank"
                    >
                      <img className=" image _bq " src={calc} alt="Alt text" />
                      <div className=" normal _bs ">
                        <div className=" text _q "></div>
                      </div>
                      <div className=" hover _br ">
                        <div className=" text _q ">
                          <div className="work-title">Calculator</div>
                          <div className="work-legend">
                            Skeumorphic design and algorithmic calculation
                            features
                          </div>
                          <div className="work-legend">
                            freeCodeCamp Front-End Libraries project
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
