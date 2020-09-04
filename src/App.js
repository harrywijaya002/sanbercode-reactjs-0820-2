import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tugas9 from "./Tugas-9/tugas9";
import Tugas10 from "./Tugas-10/tugas10";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

function App() {
  return (
    <div>
      <Tugas9></Tugas9>
      <Tugas10 fruits={dataHargaBuah}></Tugas10>
    </div>
  );
}

export default App;
