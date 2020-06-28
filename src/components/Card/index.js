import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import CardWrapper from "./style.js";

export const Card = (props) => {
  return (
    <CardWrapper>
      <div className="list__card">
        <div className="list__card--header">
          <div className="list__card__row">
            <div className="list__card__row1--col name">Vedic chai</div>
            <div className="list__card__row1--col type">Product</div>
            <div className="list__card__row1--col">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>
          <div className="sku">
            <span>SKU:</span>
            5355353535
          </div>
        </div>
        <div className="list__card__row">
          <div className="hsn">
            <div>HSN number</div>
            <div className="text">1234567</div>
          </div>
          <div className="seperator"></div>
          <div className="price">
            <div>Item Price</div>
            <div className="text">300</div>
          </div>
        </div>
        <div className="list__card__row">
          <div className="list__card__row3__col">
            <div>Tax Rate</div>
            <div>777</div>
          </div>
          <div className="list__card__row3__col">
            <div>Unit</div>
            <div className="text">7778</div>
          </div>
          <div className="list__card__row3__col">
            <div>Inital stock</div>
            <div className="text">0077</div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export const TotalCard = ({ icon, title, amount }) => {
  return (
    <CardWrapper>
      <div className="dues">
        <div>{icon}</div>
        <div>{title}</div>
        <div>{amount}</div>
      </div>
    </CardWrapper>
  );
};
