import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { handleMinus, handlePlus } from './actions';

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
    const { ageToShow, minus, plus } = this.props;
    return (
      <React.Fragment>
        <div className='tc'>
          <h3>{ageToShow}</h3>
          <button onClick={minus}>-</button>
          <button onClick={plus}>+</button>
        </div>
      </React.Fragment>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    ageToShow: state.reducerOne.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    minus: () => dispatch(handleMinus()),
    plus: () => dispatch(handlePlus())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
