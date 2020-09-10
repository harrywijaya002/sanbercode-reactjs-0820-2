import React, { useContext } from "react"
import { FruitContext } from "./FruitContext"
import axios from "axios";

const FruitForm = () => {
    const {
        nameC,
        priceC,
        weightC,
        isEditC,
        idC,
        refreshC,
    } = useContext(FruitContext);
    const [name, setName] = nameC;
    const [price, setPrice] = priceC;
    const [weight, setWeight] = weightC;
    const [isEdit, setIsEdit] = isEditC;
    const [id] = idC;
    const [refresh, setRefresh] = refreshC;

    const editFruit = (fruit) => {
        let body = {
            name,
            price,
            weight,
        };
        axios
            .put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, body)
            .then((res) => {
                setName("");
                setWeight("");
                setPrice("");
                setRefresh(!refresh);
                setIsEdit(false);
            });
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
                setName("");
                setWeight("");
                setPrice("");
                setRefresh(!refresh);
            });
    };

    return (
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
    )

}

export default FruitForm