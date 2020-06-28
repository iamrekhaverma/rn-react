import React from "react";
import TopNavBar from "../../components/TopNavBar";
import { Card } from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFilter,
  faChevronLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";
import { Button } from "antd";
import ItemsWrapper from "./style";
import { useHistory } from "react-router";

const Items = (props) => {
  console.log("props----->", props);
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
      <div className="footer-btn">
        <Button type="primary" shape="round">
          Add Item
        </Button>
      </div>
      {/* <BottomNavBar /> */}
    </ItemsWrapper>
  );
};
export default Items;
