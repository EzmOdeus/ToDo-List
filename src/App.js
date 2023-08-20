import React, { Component } from "react";
import ToDo from "./component/items/items";
import Additems from "./component/additems/additems";
class App extends Component {
  state = {
    items: [],
  };
  handleDelete = (id) => {
    let item = this.state.items;
    let items = item.filter((item) => item.id !== id);
    this.setState({ items });
    // let item = items.findIndex((item) => item.id === id);
    // items.splice(item, 1);
    // this.setState({ items });
  };
  additem = (item) => {
    item.id = Math.random() * 100;
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App">
        <Additems additem={this.additem} />
        <ToDo items={this.state.items} Delete={this.handleDelete} />
      </div>
    );
  }
}
export default App;
