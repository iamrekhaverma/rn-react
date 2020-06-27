import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="list__card">
        <div className="list__card--header">
          <div className="list__card__row1">
            <div className="list__card__row1--col1">Vedic chai</div>
            <div className="list__card__row1--col2">Product</div>
            <div className="list__card__row1--col3">
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>
        </div>
        <div className="list__card__row2">
          <div className="hsn">
            <span>HSN number</span>
            1234567
          </div>
          <div className="price">
            <span>Item Price</span>
            20
          </div>
        </div>
        <div className="list__card__row3">
          <div className="list__card__row3__col1">
            <span>Tax Rate</span>
            1234567
          </div>
          <div className="list__card__row3__col2">
            <span>Unit</span>
            20
          </div>
          <div className="list__card__row3__col2">
            <span>Inital stock</span>
            20
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
