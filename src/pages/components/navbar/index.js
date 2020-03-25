import React,{Component} from "react";
import {NavBarWrapper, NavItem} from './style'
class NavBar extends Component {

  render() {
    return (
      <NavBarWrapper>
        <NavItem>
          <a>
            <span className="iconfont item">&#xe603;</span>
            <span className="item item-name active">首页</span>
          </a>

        </NavItem>
        <NavItem>
          <a>
            <span className="iconfont item">&#xe604;</span>
            <span className="item item-name">订单</span>
          </a>
        </NavItem>
        <NavItem>
          <a>
            <span className="iconfont item">&#xe606;</span>
            <span className="item item-name">我的</span>
          </a>
        </NavItem>
      </NavBarWrapper>
    );
  }
}
export default NavBar;
