import React from 'react';
import './card.css';

const Card = function (props) {
    let { showPosts, id, postsSt } = props;
    if (!postsSt) {
    return (
        //<React.Fragment>
        <div className='tc grow bg-light-green br3 pa3 dib bw2 ma2'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt=''></img>
            <h3>{props.name}</h3>
            <h5>{props.email}</h5>
            <button className="pa2" onClick={showPosts} id={id}>Show posts</button>
        </div>
        //</React.Fragment>
    )
    }
    else {
        return (
            //<React.Fragment>
            <div className='tc bg-light-green br3 pa3 dib bw2 ma2'>
                <h3>{props.name}</h3>
                <h5>{props.email}</h5>
            </div>
            //</React.Fragment>
        )
    }
}

export default Card;