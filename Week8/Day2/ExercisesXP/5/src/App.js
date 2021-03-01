//import logo from './logo.svg';
import './App.css';
import BootstrapCard from './BootstrapCard';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BootstrapCard
          title="Welcome to react"
          description="React is the most popular rendering library in the world"
          buttonLabel="Go to the official website"
          buttonURL="https://reactjs.org/"
        />
      </React.Fragment>
    )
  }
}

export default App;
