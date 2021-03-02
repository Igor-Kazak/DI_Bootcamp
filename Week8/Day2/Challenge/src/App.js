//import logo from './logo.svg';
import './App.css';
import BootstrapCard from './BootstrapCard';
import ReactDOM from 'react-dom';
import React from 'react';

var a = 0;
var b = 0;
var c = 0;
var d = 0;

const phpCount = () => {
  a++;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
const pythonCount = () => {
  b++;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
const jsCount = () => {
  c++;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
const javaCount = () => {
  d++;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

//class App extends React.Component {
function App() {

  //render() {

  return (

    <React.Fragment>
      <h1>Vote Your Language!</h1>
      <BootstrapCard count={a} name="PHP" func={phpCount} />
      <BootstrapCard count={b} name="Python" func={pythonCount} />
      <BootstrapCard count={c} name="JavaSript" func={jsCount} />
      <BootstrapCard count={d} name="Java" func={javaCount} />
    </React.Fragment>
  )
}
//}

export default App;
