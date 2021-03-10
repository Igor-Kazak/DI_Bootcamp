import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { getAsyncCustomers } from './actions';

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //   }
  // }

  componentDidMount() {

  }

  render() {
    const { customersAsync, custom } = this.props;
    return (
      <React.Fragment>
        <div className='tc'>
          <button onClick={customersAsync} style={{margin: "10px"}}>Fetch picture</button>
          <br/>
          <img src={custom} alt="" style={{margin: "10px"}}/>
        </div>
      </React.Fragment>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    custom: state.reducerOne.customers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    customersAsync: () => dispatch(getAsyncCustomers()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
