import React from "react";
import "./about.css";
import bgIllu from "../../assets/bgIllu.png";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="about-wrapper">
          <div id="about-bg-img-top">
            <img id="about-illu-top" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="about-bg-img-btm">
            <img id="about-illu-btm" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="about-content">
            <div id="about-text-wrapper">
              <h1>Who am I ?</h1>

              <h3>Attitude</h3>

              <p className="about-paragraph">
                Were I asked about my main philosophy, I would suggest that we,
                as human beings, should be compared to tree diagrams more than
                to piles. Regarded as an intricate network of knowledges, tastes
                and abilities, richer than a mere addition of traits.
              </p>
              <p className="about-paragraph">
                As well as visual harmony in creation always draws in the exact
                same roots, either it gets pursued in a fine craft workshop or
                in front of a keyboad, a bold and sharp state of mind will
                spring whatever the soil, refining the selfsame practical sense
                and ingenuity.
              </p>

              <h3>Background</h3>

              <p className="about-paragraph">
                Continuously engaged into an esthetic research built on
                practical experimentation, I've committed myself to deploy new
                branches in as many fields of creation as I've been given the
                opportunity to explore.
              </p>
              <p className="about-paragraph">
                From art studies to a gilding and mural design first part of
                career, with frequent moves to both 2d and 3d digital graphics,
                my path has been aimed at linking my techniques to express the
                duality of an artistic sensibility coupled to a scientific
                conduct for understanding how do strings get pulled behind the
                scene.
              </p>

              <h3>Current considerations</h3>

              <p className="about-paragraph">
                Initiated to computer science and web design in 2019 through The
                Hacking Project peer-learning bootcamp, I've discovered what is,
                so far to me, the most complete tool for creative expression and
                intelligence organisation.
              </p>

              <b>
                <p className="about-paragraph">Why ?</p>
              </b>

              <p className="about-paragraph">
                Because informatics are limitless in their fields of
                application.
              </p>
              <p className="about-paragraph">
                Because of the invaluable interactive potential these
                technologies offer due their widespread use.
              </p>
              <p className="about-paragraph">
                Because with some well-shaped lines of code, a whole universe
                can be created from scratch, from its mecanics to its
                flourishes.
              </p>

              <h3>What I can do for you </h3>

              <p className="about-paragraph">Sober and elegant designs</p>
              <p className="about-paragraph">Efficient and simple solutions to complex problems</p>
              <p className="about-paragraph">Innotive ideas and smart propositions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
