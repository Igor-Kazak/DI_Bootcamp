import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TestChoose from './TestChoose'

const Home = (props) => {

    const { signedIn } = props;

    if (signedIn) {
        return (
            <>
                <TestChoose />
            </>
        )
    }
    else {
        return (
            <>
                <div className="card border-grey center mb-3 mt-3" style={{ maxWidth: "40%" }}>
                    <div className="card-header">Welcome to PPL test</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Test for aircrafts/helicopters private pilots</h5>
                        <p className="card-text">The PPL test is for private pilot licenses, which is based on European regulations and standards and is also ICAO-compliant.</p>
                        <p className="card-text">Please Sign in for test.</p>
                        <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign in</Link>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.reducerOne.signedIn
    }
}

export default connect(mapStateToProps, null)(Home);
