import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function BootstrapCard(props) {
    if (props.show === false) {
        return null;
    }
    else {
        return (
            <div className="alert alert-danger" role="alert">
                {props.text}
            </div>
        );
    }
}

export default BootstrapCard;