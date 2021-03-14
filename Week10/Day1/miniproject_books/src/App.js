import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Details from './components/Post';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {

  }

  render() {
    
    const { movieList } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path='/' exact> <Home data={this.props} /> </Route>
            {
              movieList.map((item, i) => {
                return <Route path={'/'+item.id} key={i} render={() => <Details data={item.id}/>} />   
              })
            }         
            <Route ><Redirect to="/" /></Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.reducerOne.list
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     customersAsync: () => dispatch(getAsyncCustomers()),
//   }
// }


export default connect(mapStateToProps, null)(App);
