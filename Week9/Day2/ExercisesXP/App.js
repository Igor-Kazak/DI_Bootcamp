import React from 'react';
import './App.css';
import 'tachyons';
import Lesson from './Lesson';
import { store } from "./redux/store";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {

    return (
      <React.Fragment>
        <div className='tc'>
          <Lesson count={store.getState().count} />
        </div>
      </React.Fragment >
    )
  }

}

export default App;
