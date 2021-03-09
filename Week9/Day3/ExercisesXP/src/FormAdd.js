import { connect } from 'react-redux';
import { addItem } from './actions'

const FormAdd = (props) => {
    const { handleSubmit } = props;
    return (
        <>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"></input>
                <input type="submit" value="Add" style={{marginLeft:"5px"}}/>
            </form>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         list: state.list,
//         handleSubmit: state.handleSubmit
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(addItem(event.target.firstElementChild.value));
        }
    }
  }

export default connect(null, mapDispatchToProps)(FormAdd)