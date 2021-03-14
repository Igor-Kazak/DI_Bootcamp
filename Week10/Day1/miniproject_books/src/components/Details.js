import { connect } from 'react-redux';
import React from 'react';

class Details extends React.Component {

    render() {
    const { movieInfo } = this.props;
    return (
        <div className='tc bg-light-green br3 pa3 dib bw2 ma2' style={{width:"50%"}}>
            <img src={movieInfo?.volumeInfo?.imageLinks?.thumbnail} alt={movieInfo.title}/>
            <p><strong>title:</strong> {movieInfo.volumeInfo.title}</p>
            <p><strong>subtitle:</strong> {movieInfo.volumeInfo.subtitle}</p>
            <p><strong>authors:</strong> {movieInfo.volumeInfo.authors}</p>
            <p><strong>publisher:</strong> {movieInfo.volumeInfo.publisher}</p>
            <p><strong>publishedDate:</strong> {movieInfo.volumeInfo.publishedDate}</p>
            <p><strong>description:</strong> {movieInfo.volumeInfo.description}</p>
            <p><strong>pageCount:</strong> {movieInfo.volumeInfo.pageCount}</p>
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