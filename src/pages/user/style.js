import styled from "styled-components";

export const UserWrapper = styled.div`
  display:flex;
  flexDirection:column;
  background:url("/images/mt-bg.png");
  background-size:100% 100%;
  height:160px;
  .userinfo {
   margin:0 auto;
   align-self:center;
  }
  .photo {
    display:block;
    margin:0 auto;
  }
  .username {
     display:block;
     text-align:center;
     padding-top:10px;
  }
`;

export const UserPic = styled.div`
  
`;
