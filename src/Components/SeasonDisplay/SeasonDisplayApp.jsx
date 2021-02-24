import React from "react";
import Season from "./Season";
import Loader from "./Loader";

export default class SeasonDisplayApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: "" };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <Season latitude={this.state.latitude} />;
    }

    return <Loader message="Please accept location request" />;
  }

  render() {
    return this.renderContent();
  }
}
