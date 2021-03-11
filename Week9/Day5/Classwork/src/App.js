import React from 'react';
import './App.css';
import 'tachyons';
import { connect } from 'react-redux';
import { getAsyncPoses } from './actions';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getPoses();
  }

  render() {
    //const { card } = this.props;
    return (
      <React.Fragment>
        <div className='tc'>
          <SearchBox />
        </div>
        <div className='tc'>
          <CardList />
        </div>
      </React.Fragment>
    );

  }
}

// const mapStateToProps = (state) => {
//   return {
//     cards: state.cards
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getPoses: () => {
      dispatch(getAsyncPoses());
    }
  }
}


export default connect(null, mapDispatchToProps)(App);
