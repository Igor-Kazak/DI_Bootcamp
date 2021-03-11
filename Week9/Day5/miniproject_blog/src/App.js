import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NavBar from './components/NavBar';
import Post from './components/Post';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';


class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //   }
  // }

  componentDidMount() {

  }

  render() {
    const { postsList } = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path='/' exact>
              <Home data={this.props} />
            </Route>
            <Route path='/about' render={() => <About  />} />
            <Route path='/contacts' children={<Contacts data='some data for Contact page' />} />
            {
              postsList.map(item => {
                return <Route path={'/'+item.id} key={item.id} render={() => <Post data={item.id}/>} />   
              })
            }         
            <Route ><Redirect to="/" /></Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
//<h4 className='tc'>404 page not found!</h4>
const mapStateToProps = (state) => {
  return {
    postsList: state.reducerOne.posts
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     customersAsync: () => dispatch(getAsyncCustomers()),
//   }
// }


export default connect(mapStateToProps, null)(App);
