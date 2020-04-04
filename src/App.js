import React,{Fragment} from 'react';
import {IconFont} from './statics/iconfont/iconfont'
import {GlobalStyle} from './style'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./pages/home";
import User from "./pages/user";
import Order from "./pages/order";
import NavBar from "./pages/components/navbar";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont/>
      <BrowserRouter>
        <NavBar/>
        <div>
          <Route path="/" exact component={ Home }></Route>
          <Route path="/order" exact component={ Order }></Route>
          <Route path="/user" exact component={ User }></Route>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
