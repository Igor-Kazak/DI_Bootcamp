import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { getAsyncPoses, handleMinus, handlePlus, handlePlusIfOdd } from './actions';

class App extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //   }
  // }

  // componentDidMount() {
  //   this.props.getPoses();
  // }

  render() {
    const { counter, minus, plus, plusIfOdd, plusAsync } = this.props;
    console.log(this.props)
    return (
      <React.Fragment>
        <div className='tc'>
          <h3>{counter}</h3>
          <button onClick={minus}>-</button>
          <button onClick={plus}>+</button>
          <button onClick={plusIfOdd}>Plus if odd</button>
          <button onClick={plusAsync}>Plus async</button>
        </div>
      </React.Fragment>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.reducerOne.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plusAsync: () => dispatch(getAsyncPoses()),
    minus: () => dispatch(handleMinus()),
    plus: () => dispatch(handlePlus()), 
    plusIfOdd: () => dispatch(handlePlusIfOdd())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
