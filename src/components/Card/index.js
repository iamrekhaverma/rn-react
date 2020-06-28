import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import CardWrapper from "./style.js";

export const Card = (props) => {
  const { data } = props;
  console.log("data is ", data);

  return (
    <CardWrapper>
      {data &&
        data.items.map((item) => {
          return (
            <div className="list__card" key={item.id}>
              <div className="list__card--header">
                <div className="list__card__row">
                  <div className="list__card__row1--col name">{item.name}</div>
                  <div className="list__card__row1--col type">{item.type}</div>
                  <div className="list__card__row1--col">
                    <FontAwesomeIcon icon={faEdit} />
                  </div>
                </div>
                <div className="sku">
                  <span>SKU:</span>
                  {item.sku}
                </div>
              </div>
              <div className="list__card__row">
                <div className="hsn">
                  <div>HSN number</div>
                  <div className="text">{item.hsn}</div>
                </div>
                <div className="seperator"></div>
                <div className="price">
                  <div>Item Price</div>
                  <div className="text">{item.itemPrice}</div>
                </div>
              </div>
              <div className="list__card__row">
                <div className="list__card__row3__col">
                  <div>Tax Rate</div>
                  <div>{item.taxRate}</div>
                </div>
                <div className="list__card__row3__col">
                  <div>Unit</div>
                  <div className="text">{item.unit}</div>
                </div>
                <div className="list__card__row3__col">
                  <div>Inital stock</div>
                  <div className="text">{item.initialStock}</div>
                </div>
              </div>
            </div>
          );
        })}
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
