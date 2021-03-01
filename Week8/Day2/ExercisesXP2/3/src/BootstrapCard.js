import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function BootstrapCard(props) {
    if (props.color === "Red") {
        return (
            <div className="alert alert-danger" role="alert">
                {props.text}
            </div>
        );
    }
    if (props.color === "Orange") {
        return (
            <div className="alert alert-warning" role="alert">
                {props.text}
            </div>
        );
    }
}

export default BootstrapCard;