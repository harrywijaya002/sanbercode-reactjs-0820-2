import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Tugas9 from "../Tugas-9/tugas9";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/Tugas11";
import Tugas12 from "../Tugas-12/tugas12";
import Tugas13 from "../Tugas-13/tugas13";
import Tugas14 from "../Tugas-14/tugas14";


let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
];

class Routes extends Component {
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
            <Switch>
                <Route exact path="/">
                    <Tugas9 />
                </Route>
                <Route exact path="/tugas10">
                    <Tugas10 fruits={dataHargaBuah}></Tugas10>
                </Route>
                <Route exact path="/tugas11">
                    {this.state.render ? (
                        <Tugas11 handleUnmount={this.handleUnmount}></Tugas11>
                    ) : null}
                </Route>
                <Route exact path="/tugas12">
                    <Tugas12 />
                </Route>
                <Route exact path="/tugas13">
                    <Tugas13 />
                </Route>
                <Route exact path="/tugas14">
                    <Tugas14 />
                </Route>
            </Switch>
        );
    }
};

export default Routes;