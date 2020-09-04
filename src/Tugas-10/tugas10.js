import React, { Component } from "react";
import "./tugas10.css";

class Tugas10 extends Component {
  constructor() {
    super();
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
    };
  }

  createFruitTable() {
    return this.state.dataHargaBuah.map((fruit, index) => {
      let { nama, harga, berat } = fruit;
      return (
        <tr key={nama}>
          <td>{nama}</td>
          <td>{harga}</td>
          <td>{berat}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div style={{ marginLeft: 250, marginRight: 250, marginBottom: 50 }}>
        <h1 id="title">Tabel Buah</h1>
        <table id="fruit">
          <tbody>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
            </tr>
            {this.createFruitTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tugas10;
