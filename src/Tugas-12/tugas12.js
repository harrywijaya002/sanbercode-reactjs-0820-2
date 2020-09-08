import React, { Component } from "react";
import "./tugas12.css";

class Tugas12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitList: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      name: "",
      price: "",
      weight: "",
      edit: false,
      editName: "",
    };
  }

  createFruitTable() {
    return this.state.fruitList.map((fruit, index) => {
      let { nama, harga, berat } = fruit;
      return (
        <tr key={nama}>
          <td>{nama}</td>
          <td>{harga}</td>
          <td>{berat}</td>
          <td>
            <button onClick={() => this.handleEdit(nama)}>Edit</button>
            <button onClick={() => this.deleteFruitList(nama)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  deleteFruitList(nama) {
    let fruitList = this.state.fruitList;
    let flag = 0;
    fruitList.forEach((fruit, index) => {
      if (fruit.nama === nama) flag = index;
    });
    fruitList.splice(flag, 1);
    this.setState({
      fruitList: fruitList,
    });
  }

  handleEdit(nama) {
    let fruitList = this.state.fruitList;
    let flag = 0;
    fruitList.forEach((fruit, index) => {
      if (fruit.nama === nama) flag = index;
    });
    let fruit = this.state.fruitList[flag];
    this.setState({
      name: fruit.nama,
      price: fruit.harga,
      weight: fruit.berat,
      edit: true,
      editName: fruit.nama,
    });
  }

  addFruit(e) {
    e.preventDefault();
    if (this.state.edit === true) {
      this.editFruit();
      return;
    }
    let newFruit = {
      nama: this.state.name,
      berat: this.state.weight,
      harga: this.state.price,
    };
    let temp = this.state.fruitList;
    console.log(temp);
    temp.push(newFruit);
    console.log(temp);
    this.setState({
      fruitList: temp,
    });
  }

  editFruit() {
    let fruitList = this.state.fruitList;
    let flag = 0;
    fruitList.forEach((fruit, index) => {
      if (fruit.nama === this.state.editName) flag = index;
    });
    let fruit = this.state.fruitList;
    let editFruit = {
      nama: this.state.name,
      harga: this.state.price,
      berat: this.state.weight,
    };
    fruit[flag] = editFruit;
    this.setState({
      fruitList: fruit,
      edit: false,
      editName: "",
    });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleWeight(e) {
    this.setState({ weight: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: 250, marginRight: 250, marginBottom: 50 }}>
          <h1 id="title">Tabel Buah</h1>
          <table id="fruit">
            <tbody>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Action</th>
              </tr>
              {this.createFruitTable()}
            </tbody>
          </table>
        </div>
        <div className="form">
          <form onSubmit={(e) => this.addFruit(e)}>
            <h2>Input Buah</h2>
            <label htmlFor="namaBuah">Nama Buah</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleName(e)}
            />
            <br />
            <label htmlFor="hargaBuah">Harga buah</label>
            <input
              type="text"
              value={this.state.price}
              onChange={(e) => this.handlePrice(e)}
            />
            <br />
            <label htmlFor="beratBuah">Berat buah</label>
            <input
              type="text"
              placeholder="Satuan gram"
              value={this.state.weight}
              onChange={(e) => this.handleWeight(e)}
            />
            <br />
            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Tugas12;
