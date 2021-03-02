//import logo from './logo.svg';
import './App.css';
import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      d: 0
    }
  }

  phpCount = () => {
    this.setState({a:this.state.a+1})
  }
  pythonCount = () => {
    this.setState({b:this.state.b+1})
  }
  jsCount = () => {
    this.setState({c:this.state.c+1})
  }
  javaCount = () => {
    this.setState({d:this.state.d+1})
  }

  render() {
    const {a} = this.state;
    const {b} = this.state;
    const {c} = this.state;
    const {d} = this.state;
  return (
    <React.Fragment>
      <h1>Vote Your Language!</h1>
      <BootstrapCard count={a} name="PHP" func={this.phpCount} />
      <BootstrapCard count={b} name="Python" func={this.pythonCount} />
      <BootstrapCard count={c} name="JavaSript" func={this.jsCount} />
      <BootstrapCard count={d} name="Java" func={this.javaCount} />
    </React.Fragment>
  )
}
}

export default App;
