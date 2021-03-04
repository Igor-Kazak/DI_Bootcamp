import React from 'react';
import './card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const { clk } = this.props

        return (
            <div
                className='tc grow bg-light-green br3 pa3 dib bw2 ma2'
                onClick={() => clk(this.props.id)}>
                <img src={this.props.image} alt=''></img>
                <h4><strong>Name: </strong>{this.props.name}</h4>
                <h5><strong>Occupation: </strong>{this.props.occupation}</h5>
            </div>
        )
    }
}

export default Card;