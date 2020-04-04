import React,{Component} from "react";
import {Link} from "react-router-dom";
import {NavBarWrapper, NavItem} from './style'
class NavBar extends Component {

  render() {
    return (
      <NavBarWrapper>
        <NavItem>
          <Link to="/">
            <span className="iconfont item">&#xe603;</span>
            <span className="item item-name active">首页</span>
          </Link>

        </NavItem>
        <NavItem>
          <Link to="/order">
            <span className="iconfont item">&#xe604;</span>
            <span className="item item-name">订单</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/user">
            <span className="iconfont item">&#xe606;</span>
            <span className="item item-name">我的</span>
          </Link>
        </NavItem>
      </NavBarWrapper>
    );
  }
}
export default NavBar;
