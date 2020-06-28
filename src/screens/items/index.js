import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFilter,
  faChevronLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

import TopNavBar from "../../components/TopNavBar";
import { Card } from "../../components/Card";
import { data } from "./data";
import ItemsWrapper from "./style";

const Items = (props) => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  return (
    <ItemsWrapper>
      <TopNavBar
        title="Items"
        leftIcon={<FontAwesomeIcon icon={faChevronLeft} onClick={goToHome} />}
        action={<FontAwesomeIcon icon={faSearch} />}
      />
      <header className="layout-row">
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
      <div className="footer-btn">
        <Button type="primary" shape="round">
          Add Item
        </Button>
      </div>
    </ItemsWrapper>
  );
};
export default Items;
