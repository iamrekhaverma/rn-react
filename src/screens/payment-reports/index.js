import React from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

import TopNavBar from "../../components/TopNavBar";
import ReportsWrapper from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { AccordionItem } from "../../components/Accordion";

const PaymentReports = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  return (
    <ReportsWrapper>
      <TopNavBar
        title={t("_payment_reports_")}
        leftIcon={<FontAwesomeIcon icon={faChevronLeft} onClick={goToHome} />}
      />
      <div className="container">
        <AccordionItem title={t("_my_report")} />
        <AccordionItem title={t("_statemnet_report")} />
        <AccordionItem title={t("_invoice_report")} />
      </div>
    </ReportsWrapper>
  );
};
export default PaymentReports;
