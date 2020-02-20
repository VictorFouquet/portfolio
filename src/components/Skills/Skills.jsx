import React from "react";
import "./skills.css";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

import bgIllu from "../../assets/bgIllu.png";
import CloseIcon from "../../svgIcons/CloseIcon";

import graphData from "./data/graphData";
import programmingData from "./data/programmingData";
import algorithmsData from "./data/algorithmsData";
import dataStructuresData from "./data/dataStructuresData";
import workflowData from "./data/workflowData";
import artData from "./data/artData";
import digitalData from "./data/digitalData";
import traditionnalData from "./data/traditionnalData";
import fineCraftData from "./data/fineCraftData";
import languagesData from "./data/languagesData";

function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [am4core.color("#4cb6c8")];
  }
}

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_myTheme);

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: "I'm the one in head",
      chartToDisplay: "chartdiv",
      arbo: [],
      graphToggled: false
    };

    this.skillChart = this.skillChart.bind(this);
    this.programmingChart = this.programmingChart.bind(this);
    this.languagesChart = this.languagesChart.bind(this);
    this.artChart = this.artChart.bind(this);
    this.digitalChart = this.digitalChart.bind(this);
    this.traditionnalChart = this.traditionnalChart.bind(this);
    this.fineCraftChart = this.fineCraftChart.bind(this);
    this.algorithmsChart = this.algorithmsChart.bind(this);
    this.dataStructuresChart = this.dataStructuresChart.bind(this);
    this.workflowChart = this.workflowChart.bind(this);
    this.overallGraph = this.overallGraph.bind(this);
    this.toggleGraph = this.toggleGraph.bind(this);
  }

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart = chart;
    this.skillChart();
    this.overallGraph();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  toggleGraph() {
    this.setState({
      graphToggled: !this.state.graphToggled
    });
  }

  overallGraph() {
    let chartGraph = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chartGraph.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    series.data = graphData;

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";

    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(1.5);
    series.maxRadius = am4core.percent(2.5);
  }

  skillChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = [
      {
        country: "Art",
        litres: 40,
        description: "Digital\nTraditionnal\nFine Craft"
      },
      {
        country: "Programming",
        litres: 60,
        description: "Languages\nAlgorithms\nData Structure\nWorkflow"
      }
    ];

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;

    this.setState({ arbo: ["Skills"] });

    series.slices.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"]["country"]);
        switch (ev.target["_dataItem"]["_dataContext"]["country"]) {
          case "Programming":
            this.setState({ arbo: ["Skills", "Programming"] });
            this.programmingChart();
            break;
          case "Art":
            this.setState({ arbo: ["Skills", "Art"] });
            this.artChart();
            break;
          default:
            break;
        }
      },
      this
    );
  }

  programmingChart() {
    this.chart.dispose();
    this.setState({ arbo: ["Skills", "Programming"] });
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = programmingData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;

    series.slices.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"]["country"]);
        switch (ev.target["_dataItem"]["_dataContext"]["country"]) {
          case "Languages":
            this.setState({ arbo: ["Skills", "Programming", "Languages"] });
            this.languagesChart();
            break;
          case "Algorithms":
            this.setState({ arbo: ["Skills", "Programming", "Algorithms"] });
            this.algorithmsChart();
            break;
          case "Data Structure":
            this.setState({
              arbo: ["Skills", "Programming", "Data Structures"]
            });
            this.dataStructuresChart();
            break;
          case "Workflow":
            this.setState({ arbo: ["Skills", "Programming", "Workflow"] });
            this.workflowChart();
            break;
          default:
            break;
        }
      },
      this
    );
  }

  algorithmsChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = algorithmsData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  dataStructuresChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = dataStructuresData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  workflowChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = workflowData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  artChart() {
    this.chart.dispose();
    this.setState({ arbo: ["Skills", "Art"] });
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = artData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;

    series.slices.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"]["country"]);
        switch (ev.target["_dataItem"]["_dataContext"]["country"]) {
          case "Digital":
            this.setState({ arbo: ["Skills", "Art", "Digital"] });
            this.digitalChart();
            break;
          case "Traditionnal":
            this.setState({ arbo: ["Skills", "Art", "Traditionnal"] });
            this.traditionnalChart();
            break;
          case "Fine Crafts":
            this.setState({ arbo: ["Skills", "Art", "Fine Crafts"] });
            this.fineCraftChart();
            break;
          default:
            break;
        }
      },
      this
    );
  }

  digitalChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = digitalData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  traditionnalChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = traditionnalData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  fineCraftChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = fineCraftData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  languagesChart() {
    this.chart.dispose();
    this.chart = am4core.create("chartdiv", am4charts.PieChart3D);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.legend = new am4charts.Legend();
    this.chart.legend.fill = am4core.color("white");

    this.chart.data = languagesData;

    let series = this.chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.tooltipText = "{country}:\n{description}[/]";

    this.chart = this.chart;
  }

  render() {
    let arboDiv = this.state.arbo.map(function(e) {
      console.log(e);
      if (e === "Skills") {
        return (
          <div className="arbo-item-top-level" onClick={this.skillChart}>
            {e}
            <div className="circle" />
          </div>
        );
      } else if (e === "Art") {
        return (
          <div className="arbo-item-middle-level" onClick={this.artChart}>
            {e}
            <div className="circle" />
          </div>
        );
      } else if (e === "Programming") {
        return (
          <div
            className="arbo-item-middle-level"
            onClick={this.programmingChart}
          >
            {e}
            <div className="circle" />
          </div>
        );
      } else {
        return (
          <div className="arbo-item-bottom-level">
            {e}
            <div className="circle" />
          </div>
        );
      }
    }, this);
    arboDiv.unshift(
      <div className="arbo-item-overall" onClick={this.toggleGraph}>
        Overall View
        <div className="circle" />
      </div>
    );
    var graphClName = this.state.graphToggled
      ? "graph-ctn"
      : "graph-ctn-hidden";
    return (
      <div id="skills">
        <div id={graphClName}>
          <div id="close" onClick={this.toggleGraph}>
            <CloseIcon />
          </div>
          <div
            id="chartdivgraph"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>
        <div id="skills-wrapper">
          <div id="skills-bg-img-top">
            <img id="skills-illu-top" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="skills-bg-img-btm">
            <img id="skills-illu-btm" src={bgIllu} alt="ça marche ap"></img>
          </div>
          <div id="skills-content">
            <h1 id="skills-title">Skills :</h1>
            <div id="arbo-container">{arboDiv}</div>
            <div id="chartdiv" style={{ width: "50vw", height: "60vh" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
