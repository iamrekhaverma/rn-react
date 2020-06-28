import styled from "styled-components";
// import StyleConstant from "util/style-constants";

const BottomNavBarWrapper = styled.div`
  .bottom-nav-bar {
    .route.plus {
      height: 50px;
      padding: 4px;
      border-radius: 16px;
      color: #fff !important;
      background: ${({ theme }) => theme.primaryDark};
      border-color: #1890ff;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    }
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: rgb(255, 255, 255);
    font-size: 14px;
    z-index: 9999;
    display: none;
    right: 0px;
    left: 0px;
    height: 65px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 14px 0px;
    .route {
      color: dimgrey;
      display: flex;
      font-size: 10px;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .route.active {
      color: #3b95cb;
    }
    img {
      height: 18px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 799px) {
    .bottom-nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default BottomNavBarWrapper;
