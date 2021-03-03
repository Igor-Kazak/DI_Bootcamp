//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {

    if (this.state.counter === 5) {
      throw new Error('Oooops')
    }
    else {
      return (
        <h3
          onClick={this.increment}
        >{this.state.counter}</h3>
      )
    }
  }

}

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

function App() {

  // render() {

  return (
    <React.Fragment>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </React.Fragment>
  )
}
// }

export default App;
