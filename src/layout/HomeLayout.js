import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import HomeWrapper from "./style";
import HamburgerMenu from "react-hamburger-menu";
import { COMMON_NAVBAR_LINKS } from "../util/app-constants";
import { TotalCard } from "../components/Card";
import { TabsMenu } from "../components/Tabs";
import BarChart from "../components/BarChart";

const HomeLayout = (props) => {
  const { t } = useTranslation();
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
        <div className="record-payment">{t("_record_payment")}</div>
        <div className="accordian-item">
          <div>{t("_oldest_invoice_")}</div>
          <div>27 Days</div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="revenue-card">
          <div className="row">
            <div>{t("_total_revenue")}</div>
            <div>278887878</div>
          </div>
          <div className="">
            <TabsMenu />
            <BarChart />
          </div>
        </div>
        <div>1</div>
      </div>
      <BottomNavBar />
    </HomeWrapper>
  );
};
export default HomeLayout;
