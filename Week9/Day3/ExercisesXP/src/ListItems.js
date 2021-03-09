import { connect } from 'react-redux';
import { removeItem } from './actions';

const ListItems = (props) => {
    const { list, handleClick } = props;
    return (
        <>
            <h3>List</h3>
            {
                list.map((item, i) => {
                    return (
                    <div key={i}>
                    <p>{item} <button id={i} onClick={handleClick} >Remove</button></p>
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
        handleClick: (event) => dispatch(removeItem(event.target.id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)