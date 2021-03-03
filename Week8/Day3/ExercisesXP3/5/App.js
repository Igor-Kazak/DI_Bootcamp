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

  shot = () => {
    alert('Nice Shot!');
  }

  shot2 = () => {
    alert(this);
  }

  shot3 = () => {
    alert(this.state);
  }

  shot4 = (word) => {
    alert(word);
  }

  render() {

    return (
      <React.Fragment>
        <button onClick={() => alert('Great Shot!')}>Take the shot!</button>
        <br/>
        <button onClick={this.shot}>Shot again!</button>
        <br/>
        <button onClick={this.shot2}>Keep shooting!</button>
        <br/>
        <button onClick={this.shot3}>Keep shooting!</button>
        <br/>
        <button onClick={() => this.shot4('Goal')}>Keep shooting! with arg</button>
      </React.Fragment>
    )
  }
}

export default App;
