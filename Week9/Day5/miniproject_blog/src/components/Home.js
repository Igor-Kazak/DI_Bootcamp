import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './blog.png'
import './Home.css'

class Home extends React.Component {

  render() {
    const { postsList } = this.props;
    if (postsList.length === 0) {
      return (
        <>
          <div className='tc'>
            <h4>Home</h4>
            There is no posts
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className="container home">
            <h4 className='tc'>Home</h4>
            {
              postsList.map(item => {
                return <div className='post card' key={item.id}>
                  <img src={logo} alt="" />
                  <div className="card-content">
                    <Link to={'/' + item.id}>
                      <span className="card-title red-text">{item.title}</span>
                    </Link>
                    <p>{item.body}</p>
                  </div>
                </div>
              })
            }
          </div>
        </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    postsList: state.reducerOne.posts
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     customersAsync: () => dispatch(getAsyncCustomers()),
//   }
// }


export default connect(mapStateToProps, null)(Home);