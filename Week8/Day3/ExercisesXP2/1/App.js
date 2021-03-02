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

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(){
    document.getElementById('empty1').innerHTML = 
    'My favorite color is ' + this.state.color;
  }

  render() {
    const { color } = this.state
    return (
      <React.Fragment>
        <h3>My favorite color is {color}</h3>
        <button onClick={this.changeColor}>Change color</button>
        <div id="empty1"></div>
      </React.Fragment>
    )
  }
}

export default App;
