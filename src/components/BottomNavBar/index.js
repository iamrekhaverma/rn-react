import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { SettingFilled } from "@ant-design/icons";

import BottomNavBarWrapper from "./style";
import {
  faPlus,
  faHome,
  faFileInvoice,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavBar = () => {
  const getRoute = (id) => {
    switch (id) {
      case 1: {
        return "/home";
      }
      case 2: {
        return "/invoices";
      }
      case 3: {
        return "/bills";
      }
      case 4: {
        return "/settings";
      }
      default: {
        return "/";
      }
    }
  };
  const routes = [
    {
      id: 1,
      to: getRoute(1),
      name: "Home",
      exact: true,
      component: <FontAwesomeIcon icon={faHome} />,
    },
    {
      id: 2,
      to: getRoute(2),
      name: "Invoices",
      exact: true,
      component: <FontAwesomeIcon icon={faFileInvoice} />,
    },
    {
      id: 3,
      to: "/items",
      name: "",
      exact: true,
      className: "plus",
      component: <FontAwesomeIcon icon={faPlus} />,
    },
    {
      id: 4,
      to: "/bills",
      name: "Bills",
      exact: false,
      common: true,
      component: <FontAwesomeIcon icon={faMoneyBill} />,
    },
    {
      id: 5,
      to: getRoute(4),
      name: "Settings",
      exact: false,
      component: <SettingFilled />,
    },
  ];
  return (
    <BottomNavBarWrapper>
      <div className="bottom-nav-bar">
        {routes.map((route) => {
          return (
            <NavLink
              to={route.to}
              key={route.id}
              className={`route ${route.className}`}
              exact={route.exact}
            >
              <span className="layout-column">
                {route.component}
                {route.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </BottomNavBarWrapper>
  );
};

export default withRouter(BottomNavBar);
