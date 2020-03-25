import React,{Fragment} from 'react';
import {IconFont} from './statics/iconfont/iconfont'
import {GlobalStyle} from './style'
import Header from "./pages/components/header";
import NavBar from "./pages/components/navbar";
import CateIcon from "./pages/components/cate";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont/>
      <Header/>
      <CateIcon/>
      <NavBar/>
    </Fragment>
  );
}

export default App;
