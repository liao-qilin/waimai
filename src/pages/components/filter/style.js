import styled from "styled-components";

export const FilterWrapper = styled.div`
  .filter-top {
    text-align:center;
    font-size:16px;
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
  }
`;
