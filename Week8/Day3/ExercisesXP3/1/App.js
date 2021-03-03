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

  render() {

    return (
      <React.Fragment>
        <button onClick={() => alert('Great Shot!')}>Take the shot!</button>
      </React.Fragment>
    )
  }
}

export default App;
