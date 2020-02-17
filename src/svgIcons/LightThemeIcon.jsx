import React from "react";

class LightThemeIcon extends React.Component {
  render() {
    return (
      <svg
        className="theme-icon"
        onClick={this.props.onClick}
        width="10.816mm"
        height="10.815mm"
        version="1.1"
        viewBox="0 0 10.816 10.815"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-74.719 245.65)">
          <path
            d="m80.126-245.65-1.1428 1.1428-1.5611-0.41827-0.41827 1.5611-1.5611 0.41831 0.41827 1.5611-1.1428 1.1428 1.1428 1.1428-0.41827 1.5611 1.5611 0.41831 0.41827 1.5611 1.5611-0.41827 1.1428 1.1428 1.1428-1.1428 1.5611 0.41827 0.41827-1.5611 1.5611-0.41831-0.41827-1.5611 1.1428-1.1428-1.1428-1.1428 0.41827-1.5611-1.5611-0.41831-0.41827-1.5611-1.5611 0.41827zm-0.0464 1.5821c0.0266-2.9e-4 0.0532-2.1e-4 0.0798 0 0.31576 4e-3 0.63653 0.0464 0.95626 0.13202 2.0462 0.54829 3.2521 2.637 2.7039 4.6832-0.54829 2.0462-2.637 3.2521-4.6832 2.7038-2.0462-0.54828-3.2522-2.637-2.7039-4.6832 0.45539-1.6995 1.9734-2.8194 3.6472-2.8359zm0.0745 0.60959c-1.4334-0.0159-2.7442 0.93264-3.1331 2.384-0.46092 1.7202 0.55282 3.4761 2.273 3.937 1.7202 0.46092 3.4761-0.55287 3.937-2.273 0.46092-1.7202-0.55286-3.4761-2.273-3.937-0.26878-0.072-0.53844-0.10805-0.80389-0.11099z"
          />
        </g>
      </svg>
    );
  }
}

export default LightThemeIcon;
