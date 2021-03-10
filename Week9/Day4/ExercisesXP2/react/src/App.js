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
    this.props.customersAsync();
  }

  render() {
    const { custom } = this.props;
    return (
      <React.Fragment>
        <div className='tc'>
          <h1>Customers</h1>
          {
            custom.map((item, i) => {
              return <h3 key={item.id}>{item.firstName} {item.lastName}</h3>
            })
          }
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
