import { connect } from 'react-redux';
import React from 'react';
import { handleSelect } from '../actions'

class SearchBox extends React.Component {

    render() {
        const { poses, select, id } = this.props;
        return (
            <div className="tc pa3">
                <select name="english_names" className="bg-light br3 pa1 ma2 dib" onChange={select} value={id}>
                <option value="0">English name</option>
                    {
                        poses.map((item, i) => {
                            return <option value={item.id} key={i}>{item.english_name}</option>
                        })
                    }
                </select>
                <select name="sanskrit_names" className="bg-light br3 pa1 ma2 dib" onChange={select} value={id}>
                <option value="0">Sanskrit name</option>
                    {
                        poses.map((item, i) => {
                            return <option value={item.id} key={i}>{item.sanskrit_name}</option>
                        })
                    }
                </select>
            </div>
            
            // <div className="tc pa3">
            //     <input
            //         type="search"
            //         placeholder="Search fo robots"
            //         className="pa3 ba b--green bg-lightest-blue"
            //         onChange={this.mySearch} />
            //     <button
            //         className="pa3 ba"
            //         onClick={()=>btn(text)}
            //     > Search </button>
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        poses: state.reducerOne.poses,
        id: state.reducerOne.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        select: (event) => {
        dispatch(handleSelect(event.target.value));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);