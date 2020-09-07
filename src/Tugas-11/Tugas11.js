import React, { Component } from "react";

class Tugas11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 150,
      clock: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      clock: new Date().toLocaleTimeString(),
    });
    if (this.state.time === 0) this.props.handleUnmount();
  }

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          Sekarang jam: {this.state.clock} &nbsp;&nbsp;&nbsp;&nbsp; Hitung
          mundur: {this.state.time}
        </h1>
      </>
    );
  }
}

export default Tugas11;
