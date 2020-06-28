import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import AccordionWrapper from "./style";

export const AccordionItem = ({ title, content }) => {
  return (
    <AccordionWrapper>
      <div class="accordion-item">
        <h3 class="accordion-item__title layout-row">
          {title}
          <span class="accordion-item__arrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </h3>

        <div class="accordion-item__content">
          <div class="entry">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </AccordionWrapper>
  );
};
