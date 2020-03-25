import React,{Component} from "react";
import {FilterWrapper} from "./style";

class Filter extends Component{

  render() {
    return (
      <FilterWrapper>
        <div className="filter-top">
          附近商家
        </div>
        <div className="filter-box">
          <div className="filter-item">综合排序</div>
          <div className="filter-item">销量最高</div>
          <div className="filter-item">距离最近</div>
          <div className="filter-item">筛选</div>
        </div>
      </FilterWrapper>
    )
  }
}
export default Filter;
