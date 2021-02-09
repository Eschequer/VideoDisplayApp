import React from "react";

export default class Hello extends React.Component {
  render() {
    return <h1>{this.props.greeting} React!!</h1>;
  }
}

Hello.defaultProps = {
  greeting: "Hola,",
};
