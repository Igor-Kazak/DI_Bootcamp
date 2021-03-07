import React from 'react';
import './App.css';
import 'tachyons';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';


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
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Home data='some data...1' />
          </Route>
          <Route path='/about' render={() => <About data='some data...2' />} />
          <Route path='/contacts' children={<Contacts data='some data...3' />} />
          <Route ><h3>404 page not found!</h3></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
