import React,{Fragment} from 'react';
import {IconFont} from './statics/iconfont/iconfont'
import {GlobalStyle} from './style'
import HomePage from "./pages/home";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont/>
      <HomePage/>
    </Fragment>
  );
}

export default App;
