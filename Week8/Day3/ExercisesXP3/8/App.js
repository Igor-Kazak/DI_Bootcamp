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

    const handleKeyPress = (event) => {
      if (event.which === 13) {
        alert('Enter was pressed, your input is: ' + event.target.value);
      }
    }

    return (
      <React.Fragment>
        <input type="text" onKeyPress={handleKeyPress} />
      </React.Fragment>
    )
  }
}

export default App;
