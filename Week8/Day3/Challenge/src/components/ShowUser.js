import React from 'react';

const ShowUser = (props) => {
    let { firstname, lastname, age, gender, destination, nutsfree, lactosfree, vegan } = props.stt
    return (
        <React.Fragment>
                <h5>First name: {firstname}<br/>
                Last name: {lastname}<br/>
                Age: {age}<br/>
                Gender: {gender}<br/>
                Destination: {destination}<br/>
                Nuts free: {nutsfree}<br/>
                Lactos free: {lactosfree}<br/>
                Vegan: {vegan}</h5>
        </React.Fragment>
    )
}

export default ShowUser;
