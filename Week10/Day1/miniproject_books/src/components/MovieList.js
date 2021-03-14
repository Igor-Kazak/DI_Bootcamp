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
                return <Post title={item.volumeInfo.title} pic={item?.volumeInfo?.imageLinks?.thumbnail} imdbID={item.id} key={i}/>
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
