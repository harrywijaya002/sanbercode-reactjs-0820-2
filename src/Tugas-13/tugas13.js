import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tugas13.css";

const Tugas13 = () => {
  const [refresh, setRefresh] = useState(true);
  const [fruitList, setFruitList] = useState(null);
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(-1);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then((res) => {
        setFruitList(res.data);
      });
  }, [refresh]);

  const createFruitTable = () => {
    return fruitList === null
      ? null
      : fruitList.map((fruit, index) => {
          let { id, name, price, weight } = fruit;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{price}</td>
              <td>{weight}</td>
              <td>
                <button onClick={() => handleEdit(fruit)}>Edit</button>
                <button onClick={() => deleteFruitList(id)}>Delete</button>
              </td>
            </tr>
          );
        });
  };

  const deleteFruitList = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setRefresh(!refresh);
      });
  };

  const handleEdit = (fruit) => {
    setName(fruit.name);
    setPrice(fruit.price);
    setWeight(fruit.weight);
    setId(fruit.id);
    setIsEdit(true);
  };

  const addFruit = (e) => {
    e.preventDefault();
    if (isEdit === true) {
      editFruit();
      return;
    }
    let body = {
      name,
      weight,
      price,
    };
    return axios
      .post(`http://backendexample.sanbercloud.com/api/fruits`, body)
      .then((res) => {
        console.log(res);
        setRefresh(!refresh);
      });
  };

  const editFruit = (fruit) => {
    let body = {
      name,
      price,
      weight,
    };
    axios
      .put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, body)
      .then((res) => {
        setRefresh(!refresh);
        setIsEdit(false);
      });
  };

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
            {createFruitTable()}
          </tbody>
        </table>
      </div>
      <div className="form">
        <form onSubmit={addFruit}>
          <h2>Input Buah</h2>
          <label htmlFor="namaBuah">Nama Buah</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="hargaBuah">Harga buah</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="beratBuah">Berat buah</label>
          <input
            type="text"
            value={weight}
            placeholder="Satuan gram"
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Tugas13;
