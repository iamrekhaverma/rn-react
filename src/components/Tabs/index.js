import React, { useState } from "react";
import { Radio } from "antd";

export const TabsMenu = () => {
  const [state, setState] = useState({ size: "small" });

  const onChange = (e) => {
    setState({ size: e.target.value });
  };
  return (
    <Radio.Group
      value={state.size}
      onChange={onChange}
      style={{
        marginBottom: 16,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Radio.Button value="small">Weekly</Radio.Button>
      <Radio.Button value="default">Monthly</Radio.Button>
      <Radio.Button value="large">Yearly</Radio.Button>
      {/* <div id="bar-chart"></div> */}
      {/* <BarChart
        data={barChart.data}
        width={barChart.width}
        height={barChart.height}
      /> */}
    </Radio.Group>
  );
};
