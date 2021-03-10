import { connect } from 'react-redux';
import Card from './Card';

const CardList = (props) => {
    const { poses } = props;
    return (
        <>
            {
                poses.map((item, i) => {
                    return <Card pose={item} key={i} />
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        poses: state.reducerOne.id === '' ? state.reducerOne.poses : state.reducerOne.pose,
    }
}

export default connect(mapStateToProps, null)(CardList);