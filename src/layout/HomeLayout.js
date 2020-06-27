import React from "react";

import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";

const HomeLayout = (props) => {
  console.log("props----->", props);
  return (
    <React.Fragment>
      {/* <TopNavBar /> */}
      <div className="application-base">{props.children}</div>
      <BottomNavBar />
    </React.Fragment>
  );
};
export default HomeLayout;
