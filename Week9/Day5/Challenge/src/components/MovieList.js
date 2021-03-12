import { connect } from 'react-redux';
import React from 'react';
import Post from './Post';

class MovieList extends React.Component {

    render() {

        const { movieList } = this.props;

        return (
            <>
            {
            movieList.map((item, i) => {
                return <Post title={item.Title} pic={item.Poster} imdbID={item.imdbID} key={i}/>
            })
            }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      movieList: state.reducerOne.list
    }
  }

export default connect(mapStateToProps, null)(MovieList);
