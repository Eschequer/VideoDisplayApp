import React, { Component } from "react";
import youtube from "../../api/youtube";
import SearchBar from "./SearchBar";

class VideoDisplayApp extends Component {
  handleTermSubmit = async (term) => {
    const videos = await youtube.get("/search", {
      params: { q: term },
    });

    console.dir(videos);
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.handleTermSubmit} />
      </div>
    );
  }
}

export default VideoDisplayApp;
