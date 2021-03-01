//import logo from './logo.svg';
import './App.css';
import BootstrapCard from './BootstrapCard';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BootstrapCard text="This is a danger alert - check it out!" color="Orange" />
      </React.Fragment>
    )
  }
}

export default App;
