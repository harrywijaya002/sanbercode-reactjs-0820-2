import React, { Component } from "react";
import "./App.css";
import Tugas9 from "./Tugas-9/tugas9";
import Tugas10 from "./Tugas-10/tugas10";
import Tugas11 from "./Tugas-11/Tugas11";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class App extends Component {
  constructor() {
    super();
    this.state = { render: true };
    this.handleUnmount = this.handleUnmount.bind(this);
  }

  handleUnmount() {
    this.setState({ render: false });
  }

  render() {
    return (
      <div>
        <Tugas9></Tugas9>
        <Tugas10 fruits={dataHargaBuah}></Tugas10>
        {this.state.render ? (
          <Tugas11 handleUnmount={this.handleUnmount}></Tugas11>
        ) : null}
      </div>
    );
  }
}

export default App;
