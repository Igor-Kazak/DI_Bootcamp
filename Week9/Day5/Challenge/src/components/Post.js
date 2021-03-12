import { connect } from 'react-redux';
import React from 'react';
import { getAsyncMovie } from '../actions' 

class Post extends React.Component {

    render() {
    const { handleClick, title, pic, imdbID } = this.props;
    return (
        <div className='tc bg-light-green br3 pa3 dib bw2 ma2'>
            <img src={pic} alt={title}/>
            <h6>{title}</h6>
            <button className="btn grey" onClick={()=>handleClick(imdbID)}>Details</button>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.reducerOne.list
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (imdbID) => {dispatch(getAsyncMovie(imdbID))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post);