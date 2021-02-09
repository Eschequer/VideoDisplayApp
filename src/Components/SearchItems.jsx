import React from "react";

export default class SearchItems extends React.Component {
  constructor(props) {
    super(props);

    this.onTextChanged = this.onTextChanged.bind(this);
  }

  onTextChanged(e) {
    const text = e.target.value.trim(); // удаляем пробелы
    this.props.filter(text); // передаем введенный текст в родительский компонент
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Select a smartphone"
        onInput={this.onTextChanged}
      />
    );
  }
}
