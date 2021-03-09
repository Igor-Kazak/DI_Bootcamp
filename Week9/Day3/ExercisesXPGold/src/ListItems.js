import { connect } from 'react-redux';
import { removeItem, editItem } from './actions';

const ListItems = (props) => {
    const { list, handleRemove, handleEdit } = props;
    return (
        <>
            <h3>List</h3>
            {
                list.map((item, i) => {
                    return (
                    <div key={i}>
                    <p>{item.first} | {item.second} | {item.third} | {item.fourth} 
                    <button id={i+10000} onClick={handleEdit}>Edit</button>
                    <button id={i} onClick={handleRemove}>Remove</button></p>
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
        handleEdit: (event) => dispatch(editItem(event.target.id-10000)),
        handleRemove: (event) => dispatch(removeItem(event.target.id)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)