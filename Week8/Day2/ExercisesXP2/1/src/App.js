//import logo from './logo.svg';
import './App.css';
import BootstrapCard from './BootstrapCard';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BootstrapCard text="OMG! Something really bad has happended!" />
      </React.Fragment>
    )
  }
}

export default App;
