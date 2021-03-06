import styled from "styled-components";
// import StyleConstant from "util/style-constants";

const TopNavBarWrapper = styled.div`
  .top__nav__bar {
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    padding: 19px;
    /* flex-direction: column; */
    .top__nav__bar--title {
      font-weight: bold;
      font-size: 16px;
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

export default TopNavBarWrapper;
