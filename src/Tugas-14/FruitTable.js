import React, { useContext } from "react"
import { FruitContext } from "./FruitContext"
import axios from "axios";

const FruitTable = () => {
    const {
        nameC,
        priceC,
        weightC,
        isEditC,
        idC,
        refreshC,
        fruitListC,
    } = useContext(FruitContext);
    const [name, setName] = nameC;
    const [price, setPrice] = priceC;
    const [weight, setWeight] = weightC;
    const [isEdit, setIsEdit] = isEditC;
    const [id, setId] = idC;
    const [refresh, setRefresh] = refreshC;
    const [fruitList] = fruitListC;

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

    const handleEdit = (fruit) => {
        setName(fruit.name);
        setPrice(fruit.price);
        setWeight(fruit.weight);
        setId(fruit.id);
        setIsEdit(true);
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

    return (
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
    )

}

export default FruitTable;