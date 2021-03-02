//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      color: 'red',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'yellow'})
    }, 5000);
  }

  changeColor = () =>  {
    this.setState({ color: 'blue' })
  }

  render() {
    const { color } = this.state
    return (
      <React.Fragment>
        <h3>My favorite color is {color}</h3>
        <button onClick={this.changeColor}>Change color</button>
      </React.Fragment>
    )
  }
}

export default App;
