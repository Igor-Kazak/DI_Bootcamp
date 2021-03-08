import React from 'react';
import './App.css';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div>
          <MovieList />
        </div>
        <div>
          <MovieDetails />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
