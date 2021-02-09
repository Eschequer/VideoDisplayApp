import React from "react";
import Item from "./Item";
import SearchItems from "./SearchItems";

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: this.props.data.items };
    this.filterList = this.filterList.bind(this);
  }

  filterList(text) {
    const filteredList = this.props.data.items.filter((item) => {
      return item.toLowerCase().search(text.toLowerCase()) !== -1;
    });

    this.setState({ items: filteredList });
  }

  render() {
    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <SearchItems filter={this.filterList} />
        <ul>
          {this.state.items.map((item) => {
            return <Item key={item} name={item} />;
          })}
        </ul>
      </div>
    );
  }
}
