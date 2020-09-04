import React, { Component } from "react";

class Tugas9 extends Component {
  render() {
    return (
      <div className="App">
        <div className="form">
          <div className="judul">
            <h1>Form Pembelian Buah</h1>
          </div>

          <label htmlFor="nama">Nama pelanggan</label>
          <input id="namaPelanggan" type="text" />
          <br />
          <br />

          <label id="daftar" htmlFor="daftarItem">
            Daftar Item
          </label>
          <div className="buah">
            <input type="checkbox" /> Semangka
            <br />
            <input type="checkbox" /> Jeruk
            <br />
            <input type="checkbox" /> Nanas
            <br />
            <input type="checkbox" /> Salak
            <br />
            <input type="checkbox" /> Anggur
          </div>
          <br />
          <br />

          <button>Kirim</button>
        </div>
      </div>
    );
  }
}

export default Tugas9;
