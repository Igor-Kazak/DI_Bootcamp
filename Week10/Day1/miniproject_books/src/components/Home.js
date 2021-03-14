import { connect } from 'react-redux';
import React from 'react';
import { getAsyncSearch, eraseMovie } from '../actions';
import MovieList from './MovieList';
import Details from './Details';

class Home extends React.Component {

  render() {
    const { handleSubmit, handleClick, movieInfo } = this.props;

    if (movieInfo.length === 0) {
      return (
        <>
          <div className='center'>
            <form onSubmit={handleSubmit} style={{ width: "50%", marginTop: "20vh", marginBottom: "10vh" }} className="center">
              <input type="text" placeholder="Search for a book..." id="sInput" />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className='center'>
            <MovieList />
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className='center'>
            <button onClick={handleClick} style={{ marginTop: "10px" }}>Back</button>
          </div>
          <div className='center'>
            <Details movie={movieInfo} />
          </div>
        </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movieInfo: state.reducerOne.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(getAsyncSearch(document.getElementById('sInput').value))
    },
    handleClick: () => { dispatch(eraseMovie()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);