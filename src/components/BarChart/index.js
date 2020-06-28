import React from "react";

import CanvasJSReact from "../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const options = {
    title: {
      text: "Basic Chart",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "September", y: 10 },
          { label: "October", y: 15 },
          { label: "Novemeber", y: 25 },
          { label: "December", y: 30 },
        ],
      },
    ],
  };

  return <CanvasJSChart options={options}></CanvasJSChart>;
};

export default BarChart;
