//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  shot = () => {
    alert('Nice Shot!');
  }

  render() {

    return (
      <React.Fragment>
        <button onClick={() => alert('Great Shot!')}>Take the shot!</button>
        <br/>
        <button onClick={this.shot}>Shot again!</button>
      </React.Fragment>
    )
  }
}

export default App;
