import React from 'react';

// class Car extends React.Component {
//     render() {
//         return <h2>Hi, I am a Car!</h2>;
//     }
// }

function Car() {
    return (
    <div>
    <h3>This is a header!</h3>
    <p style={{
        background: "lightblue",
        color: "red"}}>This is a paragraph!</p>    
    <a href="#">This is a link</a>
    <h3>This is a form!</h3>
    <form>
        <label>Enter your name:</label>
        <input type="text"></input>
        <input type="submit"></input>
    </form>
    <h3>This is an image!</h3>
    <img src="logo192.png"></img>
    <h3>This is a list!</h3>
    <ul>
        <li>Sex</li>
        <li>Drugs</li>
        <li>Rock'n'roll</li>
    </ul>
    </div>
    );
    
}

// const Car = () => {
//     return <h2>Hi, I am also a Car!</h2>;
// }

export default Car;