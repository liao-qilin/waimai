import React,{Component} from "react";
import {
  HeaderWrapper,SearchBox,Location,ArrowRight
} from "./style";

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Location>
          <span className="iconfont locationIcon">&#xe600;</span>
          <a className="location">珠光大厦<ArrowRight></ArrowRight></a>
        </Location>
        <SearchBox>
          <span className="iconfont searchIcon">&#xe637;</span>
          请输入商家或商品名称
        </SearchBox>
      </HeaderWrapper>
    )
  }
}

export default Header;
