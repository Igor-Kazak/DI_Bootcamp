import React from 'react';
import './App.css';
import 'tachyons';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <MemeGenerator />
      </>
    )
  }


}

export default App;
