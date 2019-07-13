import React from "react";
import "./style.css";

const Navbar = props => (

    <nav>
        <span>{props.title}</span>
        <span>{props.msg}</span>
        <span>Score {props.score} | Top Score: {props.highScore}</span>
    </nav>
);

export default Navbar;