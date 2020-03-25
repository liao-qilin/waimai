import React,{Component} from "react";
import {CateIconWrapper} from "./style"

class CateIcon extends Component{

  constructor(props){
    super(props);
    this.state = {
      cate:[
        {"image":"/images/meishi.png","name":"美食"},
        {"image":"/images/chaoshi.png","name":"美团超市"},
        {"image":"/images/guoshu.png","name":"生鲜果蔬"},
        {"image":"/images/zhuansong.png","name":"美团专送"},
        {"image":"/images/jiancan.png","name":"快食简餐"},
        {"image":"/images/meishi.png","name":"夜宵"},
        {"image":"/images/meishi.png","name":"甜点饮品"},
        {"image":"/images/jiachangcai.png","name":"家常菜"},
        {"image":"/images/xiachiguan.png","name":"小吃馆"},
        {"image":"/images/dangao.png","name":"鲜花蛋糕"},
      ]
    };
  }

  render() {
    const cate = this.state.cate;
    return (
      <CateIconWrapper>
        {
          cate.map(item => {
            return (
              <div key={item.name} className="item">
                <div><img src={item.image} /></div>
                <div className="name">{item.name}</div>
              </div>
            )
          })
        }
      </CateIconWrapper>
    );
  }
}

export default CateIcon;
