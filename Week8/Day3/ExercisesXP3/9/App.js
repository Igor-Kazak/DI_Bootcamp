//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      labelButton: 'On'
    }
  }

  togButton = () => {
    if (this.state.isToggleOn === true) {
      this.setState({labelButton: 'Off'});
      this.setState({isToggleOn: false});
    }
    else {
      this.setState({labelButton: 'On'});
      this.setState({isToggleOn: true});
    }
  }

  render() {

    return (
      <React.Fragment>
        <h5>Exercise 9</h5>
        <button onClick={this.togButton}>{this.state.labelButton}</button>
      </React.Fragment>
    )
  }
}

export default App;
