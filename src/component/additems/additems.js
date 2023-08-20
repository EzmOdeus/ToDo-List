import React, { Component } from "react";
import "./additems.css";
class Additems extends Component {
  state = {
    title: "",
  };
  handlechange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    this.props.additem(this.state);
    console.log(this.state);
    document.querySelector(".input").value = "";
  };
  render() {
    return (
      <form className="form" onSubmit={this.handlesubmit}>
        <input
          type="text"
          id="AddTask"
          onChange={this.handlechange}
          className="input"
          placeholder="Add Task"
        />
        <input type="submit" className="add" value="Add Tasks" />
      </form>
    );
  }
}
export default Additems;
