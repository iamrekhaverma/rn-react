import React from "react";

import TopNavBar from "../../components/TopNavBar";
import ReportsWrapper from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const PaymentReports = (props) => {
  console.log("props----->", props);
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
      <div class="container">
        <div class="accordion-item">
          <h3 class="accordion-item__title">
            My Report
            <span class="accordion-item__arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </h3>

          <div class="accordion-item__content">
            <div class="entry">
              <p>Statement Report</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-item__title">
            Statement Report
            <span class="accordion-item__arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </h3>

          <div class="accordion-item__content">
            <div class="entry">
              <p>Statement Report</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-item__title">
            Invoice Report
            <span class="accordion-item__arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </h3>

          <div class="accordion-item__content">
            <div class="entry">
              <p>Invoice Report</p>
            </div>
          </div>
        </div>
      </div>

      {/* <BottomNavBar /> */}
    </ReportsWrapper>
  );
};
export default PaymentReports;
