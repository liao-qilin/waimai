import styled from "styled-components";

export const CateIconWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:50px;
  flex-wrap:wrap;
  overflow:hidden;
  .item {
    width:20%;
    margin-bottom:10px;
    text-align:center;
    img {
      width:44px;
      height:44px;
    }
    .name {
      margin-top:5px;
      font-size:11px;
      color:#999;
    }
  }
`;
