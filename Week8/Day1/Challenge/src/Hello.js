import React from 'react';

const Hello = function(props){
    console.log(props)
    return(
        <div>
            Hello, {props.username}, {props.email}
        </div>
    )
}

export default Hello;