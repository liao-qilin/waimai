import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position:fixed;
  display:flex;
  top:0;
  left:0;
  height:40px;
  background:black;
  color:white;
  width:100%;
`;
export const SearchBox = styled.div`
  line-height:28px;
  margin-left:15px;
  height:28px;
  margin-top:6px;
  margin-right:10px;
  flex:1;
  z-index:99;
  border-radius:20px;
  background:#fff;
  color:gray;
  padding-left:5px;
  font-size:14px;
  .searchIcon {
    margin-left:5px;
    margin-right:5px;
  }
`;

export const Location = styled.div`
  .location {
    display:inline-block;
  }
  line-height:40px;
  .locationIcon {
    margin:auto 5px;
  }
`;

export const ArrowRight = styled.i`
    border: solid #FFF;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;
