import React, { Component } from "react";
import "./items.css";
import imge from "../istockphoto-841884438-612x612.jpg";
class ToDo extends Component {
  render() {
    const { items, Delete } = this.props;
    let length = items.length;
    const list = length ? (
      items.map((item) => {
        return (
          <div className="task" key={item.id}>
            <textarea>{item.title}</textarea>
            <span onClick={() => Delete(item.id)} className="delete">
              delete
            </span>
          </div>
        );
      })
    ) : (
      <div className="images">
        <img src={imge}></img>
      </div>
    );
    return (
      <>
        <div className="tasks">{list}</div>
      </>
    );
  }
}
export default ToDo;
