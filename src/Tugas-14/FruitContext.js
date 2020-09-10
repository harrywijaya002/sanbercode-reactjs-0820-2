import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const FruitContext = createContext();

export const Tugas14Provider = (props) => {
  const [refresh, setRefresh] = useState(true);
  const [fruitList, setFruitList] = useState(null);
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(-1);
  const [isEdit, setIsEdit] = useState(false);

  const providerValue = {
    fruitListC: [fruitList, setFruitList],
    refreshC: [refresh, setRefresh],
    priceC: [price, setPrice],
    weightC: [weight, setWeight],
    nameC: [name, setName],
    idC: [id, setId],
    isEditC: [isEdit, setIsEdit],
  }

  useEffect(() => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then((res) => {
        setFruitList(res.data);
      });
  }, [refresh]);

  return (
    <FruitContext.Provider value={providerValue}>
      {props.children}
    </FruitContext.Provider>
  );
};
