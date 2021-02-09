import React from "react";
import { ThemeContext } from "./Context";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favouriteFruit: "Apple" };
    this.changeFruit = this.changeFruit.bind(this);
  }

  changeFruit() {
    this.setState({ favouriteFruit: "Banana" });
    console.dir(this);
    console.dir(this.__proto__.constructor);
  }

  render() {
    return (
      <div>
        <h1>My favourite fruit is {this.state.favouriteFruit}</h1>
        <button type="button" onClick={this.changeFruit}>
          Change Fruit
        </button>
        <h3>Context is {this.context}</h3>
      </div>
    );
  }
}

MyComponent.contextType = ThemeContext;
