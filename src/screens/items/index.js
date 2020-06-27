import React from "react";
import TopNavBar from "../../components/TopNavBar";
import Card from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faSort,
  faChevronDown,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";

const Items = (props) => {
  console.log("props----->", props);
  return (
    <React.Fragment>
      <TopNavBar title="Items" action="search" />
      <div className="application-base">{props.children}</div>
      <header style={{ display: "flex", "justify-content": "space-between" }}>
        <div>
          <span>Sort by</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div>
          <span>Filter</span>
          <FontAwesomeIcon icon={faFilter} />
        </div>
      </header>
      <Card data={data} />
      {/* <BottomNavBar /> */}
    </React.Fragment>
  );
};
export default Items;
