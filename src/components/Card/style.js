import styled from "styled-components";
// import StyleConstant from "util/style-constants";

const CardWrapper = styled.div`
  .list__card {
    border: solid 1px #dddd;
    padding: 18px;
    border-radius: 10px;
    .sku {
      text-align: left;
      padding: 10px;
      color: darkgrey;
    }

    .list__card__row1--col.type {
      background: lightgrey;
      opacity: 0.7;
      background: ${({ theme }) => theme.primaryDark};
      color: #b721ff;
      padding: 3px;
      border-radius: 10px;
      width: 129px;
    }
    .list__card__row1--col.name {
      font-size: 18px;
      font-weight: bolder;
    }

    .list__card__row {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      :nth-child(1) {
        border-bottom: solid 1px #dddd;
      }
      :nth-child(2) {
        border-bottom: dotted;
      }
      .seperator {
        border-right: solid;
      }
    }
  }
`;

export default CardWrapper;
