import React from "react";
import { store } from "./redux/store";
import { forward, backward } from "./redux/actions";

const Lesson = ({ count }) => {

    const handleSubmit = event => {
        event.preventDefault();
        const buttonType = event.target.name
        const counter = event.target.parentElement.firstElementChild.textContent
        switch (buttonType) {
            case "plus":
                store.dispatch(forward(counter));
                break;
            case "minus":
                store.dispatch(backward(counter));
                break;
            default:
                console.log("wrong button")
        }
    }

    return (
        <>
            <h1>{count}</h1>
            <button type="submit" onClick={handleSubmit} name="minus">-</button>
            <button type="submit" onClick={handleSubmit} name="plus">+</button>
        </>
    );
};

export default Lesson;