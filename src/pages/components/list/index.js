import React,{Component} from "react";

class List extends Component {
  render() {
    return (
      <div>list</div>
    );
  }
}

function ListItem(props) {

  return (
    <div>
        <div>
          <img src=""/>
          pic
        </div>
        <div>
          <div>title</div>
          <div>shop info</div>
          <div>price info</div>
          <div>
            discount info
          </div>
        </div>
    </div>
  );
}

export default List;
