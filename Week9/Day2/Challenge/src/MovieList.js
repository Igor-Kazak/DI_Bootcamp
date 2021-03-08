import { connect } from 'react-redux';
import { chooseMovie } from './actions';

const MovieList = (props) => {
    const { list, handleClick } = props;
    return (
        <>
            <h2>Movie List</h2>
            {
                list.map((item, i) => {
                    return (
                    <div key={i}>
                    <p>{item.title} <button id={i} onClick={handleClick}>Details</button></p>
                    </div>
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        handleClick: state.handleClick
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (event) => dispatch(chooseMovie(event.target.id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)