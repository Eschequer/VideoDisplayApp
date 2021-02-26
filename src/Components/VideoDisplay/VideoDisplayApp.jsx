import React, { Component } from "react";
import youtube from "../../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class VideoDisplayApp extends Component {
  state = { videos: [] };

  handleTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: { q: term },
    });

    this.setState({ videos: data.items });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.handleTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default VideoDisplayApp;
