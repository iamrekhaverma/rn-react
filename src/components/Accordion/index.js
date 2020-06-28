import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import AccordionWrapper from "./style";

export const AccordionItem = ({ title, content }) => {
  return (
    <AccordionWrapper>
      <div className="accordion-item">
        <h3 className="accordion-item__title layout-row">
          {title}
          <span className="accordion-item__arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </h3>

        <div className="accordion-item__content">
          <div className="entry">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </AccordionWrapper>
  );
};
