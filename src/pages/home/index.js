import React, {Component, Fragment} from "react";
import Header from "../components/header";
import NavBar from "../components/navbar";
import CateIcon from "../components/cate";
import Filter from "../components/filter";
class HomePage extends Component{

  render() {
    return (
      <Fragment>
        <Header/>
        <CateIcon/>

        <Filter/>
      </Fragment>
    );
  }
}

export default HomePage;
