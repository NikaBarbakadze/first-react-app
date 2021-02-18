import React, {useState} from "react"
import ReactDOM from "react-dom";

import "./style.css"

import {data} from "./data"

const Person = (props) => {
    const {name, age, avatar, id} = props;

    return (
        <article key={id} className="person">
            <img src={avatar} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} Years</p>
            </div>
        </article>
    )
}

export default Person;

