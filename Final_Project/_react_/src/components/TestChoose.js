import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAsyncQuestions } from '../redux/actions'

const TestChoose = (props) => {

    const { getQuestions } = props;

    function markAnswer(event) {
        event.target.className = "p-3 bg-info border mx-3"
    }

    function demarkAnswer(event) {
        event.target.className = "p-3 bg-light border mx-3"
    }

    return (
        <>
            <div className="container px-5 pt-2">
                <div className="d-grid gap-3">
                    <Link to='/test' className="p-3 bg-light border mx-3"
                        onMouseEnter={markAnswer} onMouseLeave={demarkAnswer}
                        onClick={() => getQuestions('aircraft')} style={{ textDecoration: 'none', color: 'black' }}>
                        PPL test for aircrafts</Link>
                    <Link to='/test' className="p-3 bg-light border mx-3"
                        onMouseEnter={markAnswer} onMouseLeave={demarkAnswer}
                        onClick={() => getQuestions('helicopter')} style={{ textDecoration: 'none', color: 'black' }}>
                        PPL test for helicopters</Link>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: (value) => dispatch(getAsyncQuestions(value))
    }
}

export default connect(null, mapDispatchToProps)(TestChoose);

