import { connect } from 'react-redux';
import React from 'react';
import { deletPost } from '../actions'

class Post extends React.Component {

    render() {
    const { handleClick, postsList, data } = this.props;
    const post = postsList.filter(item => {return (item.id === data)})
    return (
        <div className="post">
            <h4 className="center">{post[0].title}</h4>
            <p>{post[0].body}</p>
            <div className="center">
                <button className="btn grey" onClick={()=>handleClick(post[0].id)}>Delete post</button>
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      postsList: state.reducerOne.posts,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {dispatch(deletPost(id))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post);