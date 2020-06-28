import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChevronLeft,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import TopNavBarWrapper from "./style";

const TopNavBar = ({ title, leftIcon, action }) => {
  console.log("action", leftIcon);
  return (
    <TopNavBarWrapper>
      <div className="top__nav__bar">
        <div className="top__nav__bar--left">{leftIcon}</div>
        <div className="top__nav__bar--title">{title}</div>
        <div className="top__nav__bar--action">{action}</div>
      </div>
    </TopNavBarWrapper>
  );
};

export default withRouter(TopNavBar);