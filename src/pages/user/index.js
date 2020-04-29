import React,{Component} from "react";
import {UserWrapper} from "./style";
class UserPage extends Component {
  render() {
    return(
      <UserWrapper>
        <div className="userinfo">
          <img className="photo" src="/images/user.png"/>
          <span className="username">钢铁侠</span>
        </div>
      </UserWrapper>
    );
  }
}

export default UserPage;
