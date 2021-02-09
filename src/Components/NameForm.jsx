import React from "react";
import "./NameForm.css";
import MyComponent from "./MyComponent";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.changeValue = this.changeValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeValue(event) {
    this.setState({ value: event.target.value });
  }

  submit(event) {
    console.dir(this);
    console.dir(this.__proto__.constructor);
    console.log("A name was submitted:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            value={this.state.value}
            onChange={this.changeValue}
          />
        </label>
        <input type="submit" value="Submit" />
        <MyComponent />
      </form>
    );
  }
}
