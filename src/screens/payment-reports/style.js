import styled from "styled-components";

const ReportsWrapper = styled.div`
  .container {
    max-width: 700px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
  }
  .accordion-item {
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;

    &__title {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: space-between;
      align-items: center;
      line-height: 1;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }

    &__arrow {
      fill: darkgray;
    }

    &__content {
      display: none;
      overflow: hidden;
    }
  }

  .entry {
    line-height: 1.74;

    p {
      &:last-of-type,
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default ReportsWrapper;
