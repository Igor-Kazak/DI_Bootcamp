//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("empty2").innerHTML =
    "BEFORE UPDATE: My favorite color is " + prevState.color;
    return null;
  }

  componentDidUpdate(){
    document.getElementById('empty1').innerHTML = 
    'UPDATE: My favorite color is ' + this.state.color;
  }

  render() {
    const { color } = this.state
    return (
      <React.Fragment>
        <h3>My favorite color is {color}</h3>
        <button onClick={this.changeColor}>Change color</button>
        <div id="empty1"></div>
        <div id="empty2"></div>
      </React.Fragment>
    )
  }
}

export default App;
