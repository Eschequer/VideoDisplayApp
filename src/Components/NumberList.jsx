import React from "react";

export default class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.showNumbers = this.showNumbers.bind(this);
  }

  showNumbers() {
    return this.#numbers;
  }

  #numbers = this.props.numbers;
  #itemsList = this.#numbers.map((number) => {
    console.dir(this);
    return <li key={number.toString()}>{number}</li>;
  });

  render() {
    return <ul>{this.#itemsList}</ul>;
  }
}
