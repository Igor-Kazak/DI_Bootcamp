import { connect } from 'react-redux';

const MovieDetails = (props) => {
    const { list, movieNumber } = props;
    if (movieNumber) {
        return (
            <>
                <h2>Movie Details</h2>
                <p>Title: {list[movieNumber].title}</p>
                <p>ReleaseDate: {list[movieNumber].releaseDate}</p>
                <p>Rating: {list[movieNumber].rating}</p>
            </>
        )
    }
    else {
        return (
            <>
                <h2>Movie Details</h2>
                <p>Select movie</p>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieNumber: state.movieNumber,
        list: state.list
    }
}
export default connect(mapStateToProps, null)(MovieDetails)