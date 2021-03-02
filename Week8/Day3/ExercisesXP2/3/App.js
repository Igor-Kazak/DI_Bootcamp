//import logo from './logo.svg';
import './App.css';
//import BootstrapCard from './BootstrapCard';
//import ReactDOM from 'react-dom';
import React from 'react';

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component is about to be unmounted");
  }
  render() {
    return (
      <React.Fragment>
      <h3>Hello World!</h3>
      </React.Fragment>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

delete = () => {
  this.setState({show:false});
}

  render() {
    var hello;
    if (this.state.show){
      hello = <Child />
    };

    return (
      <React.Fragment>
        {hello}
        <button onClick={this.delete}>Delete hello</button>
      </React.Fragment>
    )
  }
}

export default App;
