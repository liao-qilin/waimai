import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display:flex;
  justify-content:space-around;
  width:100%;
  position:fixed;
  height:50px;
  bottom:0;
  left:0;
`;

export const NavItem = styled.div`
  .item {
    text-align:center;
    display:block;
    font-size:30px;
    color:#999;
  }
  .item-name {
    font-size:10px;
    color:#999;
  }
  .active {
    color:black;
  }
`;
