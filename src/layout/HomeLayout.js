import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";

import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import HomeWrapper from "./style";
import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";
import { COMMON_NAVBAR_LINKS } from "../util/app-constants";
import { TotalCard } from "../components/Card";
import { TabsMenu } from "../components/Tabs";

const HomeLayout = (props) => {
  console.log("props----->", props);
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HomeWrapper>
      <TopNavBar
        title="Welcome, Kumar"
        leftIcon={
          <div className="main">
            {menuOpen && (
              <div className="small_menu layout-column">
                {COMMON_NAVBAR_LINKS.map((navLink) => {
                  return (
                    <NavLink
                      className="sm-text list"
                      to={navLink.redirect}
                      id={navLink.id}
                      key={navLink.id}
                      activeClassName="active"
                    >
                      {navLink.name}
                    </NavLink>
                  );
                })}
              </div>
            )}
            <HamburgerMenu
              // color=
              isOpen={menuOpen}
              menuClicked={() => openMenu()}
              height={15}
              width={20}
            />
          </div>
        }
      />
      <div className="container">
        <div className="total-row">
          <TotalCard
            icon={<FontAwesomeIcon icon={faClock} />}
            title="Total Invoices"
            amount="2000000"
          />
          <TotalCard
            icon={<FontAwesomeIcon icon={faClock} />}
            title="Total Invoices"
            amount="INR2000000"
          />
        </div>
        <div className="record-payment">Record Payment</div>
        <div className="accordian-item">
          <div>Oldest Invoice</div>
          <div>27 Days</div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="revenue-card">
          <div className="row">
            <div>Total Revenue</div>
            <div>278887878</div>
          </div>
          <div className="">
            <TabsMenu />
          </div>
        </div>
        <div>1</div>
      </div>
      <BottomNavBar />
    </HomeWrapper>
  );
};
export default HomeLayout;
