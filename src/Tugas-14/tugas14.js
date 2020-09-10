import React from "react"
import { Tugas14Provider } from "./FruitContext";
import FruitTable from "./FruitTable";
import FruitForm from "./FruitForm"
import "./tugas14.css";

const Tugas14 = () => {
    return (
        <Tugas14Provider>
            <FruitTable />
            <FruitForm />
        </Tugas14Provider>
    )
}

export default Tugas14;