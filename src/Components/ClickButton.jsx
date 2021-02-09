import React from "react";
import "./ClickButton.css";

export default class ClickButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { class: "off", label: "Click Me" };

    this.press = this.press.bind(this);
  }

  press() {
    let className = this.state.class === "off" ? "on" : "off";
    this.setState({ class: className });
    console.dir(this);
  }

  render() {
    return (
      <button onClick={this.press} className={this.state.class}>
        {this.state.label}
      </button>
    );
  }
}
