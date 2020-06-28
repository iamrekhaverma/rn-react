import React, { useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ w, h, id, data }) => {
  useEffect(() => {
    drawChart();
  });

  const drawChart = () => {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");
  };

  return <div id={"#" + id}></div>;
};

export default BarChart;