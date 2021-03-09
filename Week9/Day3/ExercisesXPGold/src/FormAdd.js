import { connect } from 'react-redux';
import { addItem } from './actions'

const FormAdd = (props) => {
    const { handleSubmit, toedit } = props;

    if (toedit === '') {
        return (
            <>
                <h3>Form</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="submit" value="Add" style={{ marginLeft: "5px" }} />
                </form>
            </>
        )
    }
    else {
        return (
            <>
                <h3>Form</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={toedit.first}/>
                    <input type="text" value={toedit.second}/>
                    <input type="text" value={toedit.third}/>
                    <input type="text" value={toedit.fourth}/>
                    <input type="submit" value="Add" style={{ marginLeft: "5px" }} />
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toedit: state.toedit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            let obj = {
                first: event.target.children[0].value,
                second: event.target.children[1].value,
                third: event.target.children[2].value,
                fourth: event.target.children[3].value,
            }
            event.target.children[0].value = "";
            event.target.children[1].value = "";
            event.target.children[2].value = "";
            event.target.children[3].value = "";
            dispatch(addItem(obj));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd)