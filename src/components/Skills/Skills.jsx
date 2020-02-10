import React from "react";
import "./skills.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import bgIllu from "../../assets/bgIllu.png";

function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [am4core.color("#4cb6c8")];
  }
}

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_myTheme);

class Skills extends React.Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();
    chart.legend.fill = am4core.color("white");

    chart.data = [
      {
        country: "Javascript",
        litres: 40,
        description: "React\nRedux\nD3\namCharts"
      },
      {
        country: "HTML/CSS",
        litres: 25,
        description: "Bootstrap\nSass\nCSS3\nHTML5"
      },
      {
        country: "Ruby",
        litres: 20,
        description: "Rails\nActive Records\nPostgreSQL"
      },
      {
        country: "Python",
        litres: 10,
        description: "Algorithms\nData Structures"
      },
      {
        country: "Git",
        litres: 5,
        description: "Versionning\nTeam working"
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="skills">
        <div id="skills-wrapper">
          <div id="skills-bg-img-top">
            <img id="skills-illu-top" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="skills-bg-img-btm">
            <img id="skills-illu-btm" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="skills-content">
            <h1 id="skills-title">Skills :</h1>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
