import React,{Fragment} from 'react';
import {IconFont} from './statics/iconfont/iconfont'
import {GlobalStyle} from './style'
import Header from "./pages/components/header";
import NavBar from "./pages/components/navbar";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont/>
      <Header/>
      <NavBar/>
    </Fragment>
  );
}

export default App;
