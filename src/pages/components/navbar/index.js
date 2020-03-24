import React,{Component} from "react";
import {NavBarWrapper, NavItem} from './style'
class NavBar extends Component {

  render() {
    return (
      <NavBarWrapper>
        <NavItem>
          <span className="iconfont item">&#xe603;</span>
          <span className="item item-name">首页</span>
        </NavItem>
        <NavItem>
          <span className="iconfont item">&#xe604;</span>
          <span className="item item-name">订单</span>
        </NavItem>
        <NavItem>
          <span className="iconfont item">&#xe606;</span>
          <span className="item item-name">我的</span>
        </NavItem>
      </NavBarWrapper>
    );
  }
}
export default NavBar;
