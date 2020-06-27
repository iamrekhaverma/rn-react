import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChevronLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import TopNavBarWrapper from "./style";

const TopNavBar = ({ title }) => {
  return (
    <TopNavBarWrapper>
      <div className="top__nav__bar">
        <div className="top__nav__bar--back">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="top__nav__bar--title">{title}</div>
        <div className="top__nav__bar--action">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </TopNavBarWrapper>
  );
};

export default withRouter(TopNavBar);
