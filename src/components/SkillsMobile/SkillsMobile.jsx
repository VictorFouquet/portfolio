import React from "react";
import "./skills_mobile.css";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

import bgIllu from "../../assets/bgIllu.png";
import CloseIcon from "../../svgIcons/CloseIcon";

import graphData from "../Skills/data/graphData";

function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [am4core.color("#4cb6c8")];
  }
}

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_myTheme);

class SkillsMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: "I'm the one in head",
      chartToDisplay: "chartdiv",
      arbo: [],
      graphToggled: false
    };

    this.overallGraph = this.overallGraph.bind(this);
    this.toggleGraph = this.toggleGraph.bind(this);
    this.designGraph = this.designGraph.bind(this);
    this.traditionnalGraph = this.traditionnalGraph.bind(this);
    this.digitalGraph = this.digitalGraph.bind(this);
    this.fineCraftsGraph = this.fineCraftsGraph.bind(this);
    this.programmationGraph = this.programmationGraph.bind(this);
    this.languagesGraph = this.languagesGraph.bind(this);
    this.algorithmsGraph = this.algorithmsGraph.bind(this);
    this.dataStructuresGraph = this.dataStructuresGraph.bind(this);
    this.workflowGraph = this.workflowGraph.bind(this);
  }

  componentDidMount() {
    this.overallGraph()
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
    if (this.chart){
      this.chart.dispose();
    }
    
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].name,
        children: graphData[0].children.map(function(data) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Skills":
            this.overallGraph();
            break;
          case "Programming":
            console.log(graphData[0].children[1]);
            this.programmationGraph();
            break;
          case "Design":
            this.designGraph();
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  designGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[0].name,
        children: graphData[0].children[0].children.map(function(data) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Design":
            this.overallGraph();
            break;
          case "Traditionnal":
            this.traditionnalGraph();
            break;
          case "Digital":
            this.digitalGraph();
            break;
          case "Fine\nCrafts":
            this.fineCraftsGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  digitalGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[0].children[1].name,
        children: graphData[0].children[0].children[1].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Digital":
            this.designGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  traditionnalGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[0].children[0].name,
        children: graphData[0].children[0].children[0].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Traditionnal":
            this.designGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  fineCraftsGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[0].children[2].name,
        children: graphData[0].children[0].children[2].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Fine\nCrafts":
            this.designGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  programmationGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[1].name,
        children: graphData[0].children[1].children.map(function(data) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Programming":
            this.overallGraph();
            break;
          case "Languages":
            this.languagesGraph();
            break;
          case "Algorithms":
            this.algorithmsGraph();
            break;
          case "Data\nStructures":
            this.dataStructuresGraph();
            break;
          case "Workflow":
            this.workflowGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  languagesGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[1].children[0].name,
        children: graphData[0].children[1].children[0].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Languages":
            this.programmationGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  algorithmsGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[1].children[1].name,
        children: graphData[0].children[1].children[1].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Algorithms":
            this.programmationGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  dataStructuresGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[1].children[2].name,
        children: graphData[0].children[1].children[2].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Data\nStructures":
            this.programmationGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
  }

  workflowGraph() {
    this.chart.dispose();
    let chart = am4core.create(
      "chartdivgraph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    console.log();
    series.data = [
      {
        name: graphData[0].children[1].children[3].name,
        children: graphData[0].children[1].children[3].children.map(function(
          data
        ) {
          return { value: data.value, name: data.name };
        })
      }
    ];

    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.events.on(
      "hit",
      function(ev) {
        console.log(ev.target["_dataItem"]["_dataContext"].name);
        switch (ev.target["_dataItem"]["_dataContext"].name) {
          case "Workflow":
            this.programmationGraph();
            break;
          default:
            break;
        }
      },
      this
    );
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = am4core.percent(12);
    series.maxRadius = am4core.percent(20);
    this.chart = chart;
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
      } else if (e === "Design") {
        return (
          <div className="arbo-item-middle-level" onClick={this.designChart}>
            {e}
            <div className="circle" />
          </div>
        );
      } else if (e === "Programmation") {
        return (
          <div
            className="arbo-item-middle-level"
            onClick={this.programmationChart}
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
        </div>
        <div id="skills-wrapper">

          <div id="skills-content">
            <h1 id="skills-title">Skills :</h1>

            <div
              id="chartdivgraph"
              style={{ width: "100%", height: "50vh" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsMobile;
