import React from "react";
import unsplash from "../../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class ImagesDisplayApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  async handleSearchSubmit(term) {
    const { data } = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: data.results });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
