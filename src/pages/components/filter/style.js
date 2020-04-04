import styled from "styled-components";

export const FilterWrapper = styled.div`
  .filter-top {
    text-align:center;
    font-size:16px;
    font-weight:bold;
    margin:10px 0;
  }
  .filter-top::after,.filter-top::before {
    content:"";
    display:inline-block;
    border-bottom:1px solid #999;
    margin:5px 1%;
    width:10%;
  }
  .filter-box {
    border-top:1px solid #e4e4e4;
    border-bottom:1px solid #e4e4e4;
    display:flex;
    justify-content:space-around;
    .filter-item {
      margin:10px 0;
      font-size:15px;
      color:#666;
      text-align:center;
    }
    .arrow-down {
      border: solid #666;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 3px;
      margin-left:5px;
      margin-bottom:3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
`;
