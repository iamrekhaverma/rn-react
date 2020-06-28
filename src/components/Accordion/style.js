import styled from "styled-components";
// import StyleConstant from "util/style-constants";

const AccordionWrapper = styled.div`
  .accordion-item {
    margin: 25px 0;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 10px;

    .accordion-item__title {
      font-size: 14px;
      padding: 3px;
      font-weight: bold;
    }
  }
`;

export default AccordionWrapper;
