import React from 'react';
import { connect } from 'react-redux';
import { handleSelect } from '../actions'

class AutoComplete extends React.Component {

    constructor() {
        super()
        this.state = {
            auto: []
        }
    }

    handleChange = (event) => {
        if (event.target.value === '') {
            this.setState({ auto: [] })
            this.props.select('0')
        }
        else {
            const { poses } = this.props;
            const filter = poses.filter(item => {
                return item.english_name.toLowerCase().startsWith(event.target.value.toLowerCase())
            })
            this.setState({ auto: filter });
        }
    }

    render() {
        const { select } = this.props;
        return (
            <span className="dib" style={{position:"relative"}}>
                <input type="text" placeholder="Search..." 
                onChange={this.handleChange} className="bg-light br3 pa1 ma2 dib"
                style={{width:"100%", outline:"none"}}/>
                <div style={{ color: "black", borderRadius:"10px", textAlign:"left", marginLeft:"10px", 
                                padding:"5px", width:"100%", background:"white", 
                                position:"absolute", zIndex:"9", display:(this.state.auto.length === 0)? 'none':'block'}}>
                    {
                        this.state.auto.map((item, i) => {
                            return <p key={i} style={{padding:"5px", cursor:"pointer"}}
                                    onClick={()=>select(item.id)}>{item.english_name}</p>
                        })
                    }
                </div>
            </span>
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
        select: (id) => {
        dispatch(handleSelect(id));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);