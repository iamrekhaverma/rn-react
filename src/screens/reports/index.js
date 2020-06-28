import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import TopNavBar from "../../components/TopNavBar";
import ReportsWrapper from "./style";
import { useHistory } from "react-router-dom";
import { TotalCard } from "../../components/Card";
import { AccordionItem } from "../../components/Accordion";
import {
  INVOICE_REPORTS_CHIPS,
  PAYMENT_REPORTS_CHIPS,
} from "../../util/app-constants";

const Reports = (props) => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  return (
    <ReportsWrapper>
      <TopNavBar
        title="Payment Reports"
        leftIcon={<FontAwesomeIcon icon={faChevronLeft} onClick={goToHome} />}
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
            title="Total Revenue"
            amount="INR2000000"
          />
        </div>
        <div className="layout-row total-due">
          <div className="">Total Due Amount</div>
          <div className="inr"> INR 100000000</div>
        </div>

        <div>
          <h5> Get Reports</h5>
          <AccordionItem title="Invoice Reports" />
          <div className="chips">
            {INVOICE_REPORTS_CHIPS.map((data) => {
              return (
                <div className="chip" key={data.id}>
                  {data.name}
                </div>
              );
            })}
          </div>
          <AccordionItem title="Payment Reports" />
          <div className="chips">
            {PAYMENT_REPORTS_CHIPS.map((data) => {
              return (
                <div className="chip" key={data.id}>
                  {data.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ReportsWrapper>
  );
};
export default Reports;
