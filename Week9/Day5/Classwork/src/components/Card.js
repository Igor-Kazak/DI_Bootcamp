import React from 'react';
import './card.css';

const Card = function (props) {
    const { sanskrit_name, english_name, img_url, id } = props.pose;
    return (
        <div className='tc grow bg-light-green br3 pa3 dib bw2 ma2' id={id}>
            <img src={img_url} alt=''></img>
            <h6>{english_name}</h6>
            <h5>{sanskrit_name}</h5>
        </div>
    )
}

export default Card;