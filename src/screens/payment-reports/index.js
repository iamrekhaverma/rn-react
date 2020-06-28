import React from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

import TopNavBar from "../../components/TopNavBar";
import ReportsWrapper from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const PaymentReports = (props) => {
  console.log("props----->", props);
  const { t } = useTranslation();
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
            {t("_my_report")}
            <span class="accordion-item__arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </h3>

          <div class="accordion-item__content">
            <div class="entry">
              <p>{t("_statemnet_report")}</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-item__title">
            {t("_statemnet_report")}
            <span class="accordion-item__arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </h3>

          <div class="accordion-item__content">
            <div class="entry">
              <p>{t("_statemnet_report")}</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-item__title">
            {t("_invoice_report")}
            <span class="accordion-item__arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </h3>

          <div class="accordion-item__content">
            <div class="entry">
              <p>{t("_invoice_report")}</p>
            </div>
          </div>
        </div>
      </div>
    </ReportsWrapper>
  );
};
export default PaymentReports;
