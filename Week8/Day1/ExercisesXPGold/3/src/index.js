import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mystyle.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './car';

// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
// ReactDOM.render(myelement, document.getElementById('root'));

ReactDOM.render(<Car />,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
