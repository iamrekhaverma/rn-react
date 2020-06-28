import styled from "styled-components";

const HomeWrapper = styled.div`
  .total-row {
    display: flex;
    justify-content: space-between;
  }
  .main {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .small_menu.layout-column {
      width: 160px;
      z-index: 100;
      top: 50px;
      filter: drop-shadow(rgb(59, 149, 203) 1px 4px 5px);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(0, 50, 112);
      border-image: initial;
      padding: 5px;
      background: rgb(255, 255, 255);
      border-radius: 5px;
      position: absolute;
      left: 5px;
    }
  }

  .dues {
    margin: auto;
    padding: 25px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  }
  .accordian-item {
    display: flex;
    padding: 13px;
    justify-content: space-between;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .record-payment {
    margin: 25px 0;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 10px;
  }
  .revenue-card {
    border: solid #1890ff;
    margin-top: 25px;
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }
  }
`;

export default HomeWrapper;
