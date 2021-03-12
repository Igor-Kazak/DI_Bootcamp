import { connect } from 'react-redux';
import React from 'react';

class Details extends React.Component {

    render() {
    const { movieInfo } = this.props;
    return (
        <div className='tc bg-light-green br3 pa3 dib bw2 ma2' style={{width:"50%"}}>
            <img src={movieInfo.Poster} alt={movieInfo.Title}/>
            <p><strong>Title:</strong> {movieInfo.Title}</p>
            <p><strong>Year:</strong> {movieInfo.Year}</p>
            <p><strong>Rated:</strong> {movieInfo.Rated}</p>
            <p><strong>Released:</strong> {movieInfo.Released}</p>
            <p><strong>Runtime:</strong> {movieInfo.Runtime}</p>
            <p><strong>Genre:</strong> {movieInfo.Genre}</p>
            <p><strong>Director:</strong> {movieInfo.Director}</p>
            <p><strong>Writer:</strong> {movieInfo.Writer}</p>
            <p><strong>Actors:</strong> {movieInfo.Actors}</p>
            <p><strong>Plot:</strong> {movieInfo.Plot}</p>
            <p><strong>Language:</strong> {movieInfo.Language}</p>
            <p><strong>Country:</strong> {movieInfo.Country}</p>
            <p><strong>Awards:</strong> {movieInfo.Awards}</p>
            <p><strong>imdbRating:</strong> {movieInfo.imdbRating}</p>
        </div>
    )
    }
}

 
const mapStateToProps = (state) => {
    return {
        movieInfo: state.reducerOne.movie
    }
  }
  
  
export default connect(mapStateToProps, null)(Details);