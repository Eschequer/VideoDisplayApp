import React from "react";

export default class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("значение this:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Нажми на меня</button>;
  }
}
