import React, {useState} from "react"
import ReactDOM from "react-dom";

import "./style.css"

import {data} from "./data"

import Person from "./person"

const App = () => {
    const [people, setPeople] = useState(data);
    return (
        <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((pers, index) => {
            return (
                <Person key={pers.id} {...pers} people={people} />
            )
        })}
        <button onClick={() => setPeople([])}>clear all</button>
        </section>
    )
}

ReactDOM.render(
    <App /> , document.querySelector("#root")
);

