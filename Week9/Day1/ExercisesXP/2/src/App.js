import React from 'react';
import './App.css';
//import Card from './components/Card';
//import Heroes from './components/Heroes';
import 'tachyons';
import UserData from './components/UserData';
import ShowUser from './components/ShowUser';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      filled: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input');
    let labels = event.target.getElementsByTagName('label');
    let result = {};
    for (let i = 0; i < inputs.length; i++) {
      result[labels[i].id] = inputs[i].value;
      inputs[i].value = '';
    };
    this.setState({ user: result, filled: true });
  }

  handleReset = (event) => {
    event.preventDefault();
    this.setState({ user: [], filled: false });
  }

  render() {
    if (this.state.filled) {
      return (
        <div className="box tc" >
          <ShowUser handleReset={this.handleReset} userInfo={this.state.user} />
        </div>
      )
    }
    else {
      return (
        <div className="box tc" >
          <UserData handleSubmit={this.handleSubmit} />
        </div>
      )
    }

  }

}

export default App;
