import React from 'react';
import './App.css';
import FormAdd from './FormAdd';
import ListItems from './ListItems';

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <React.Fragment>
        <div style={{margin:"10px"}}>
          <FormAdd />
        </div>
        <div style={{margin:"10px"}}>
          <ListItems />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
