import React from "react";
import Season from "./Season";

export default class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: "" };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );

    console.log(`Component did mount`);
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          Latitude: {this.state.latitude}
          <Season latitude={this.state.latitude} />
        </div>
      );
    }

    return <div>Loading!</div>;
  }
}
