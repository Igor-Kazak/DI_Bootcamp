import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function BootstrapCard(props) {

    // const colorClasses = {
    //     red: 'alert-danger',
    //     orange: 'alert-warning',
    //     green: 'alert-success'
    // };

    

    return (
        <div className="alert alert-success" role="alert">
            {props.count} &nbsp;&nbsp;&nbsp;&nbsp; {props.name} &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-light" onClick={props.func} >Click here</button>
        </div>
    );

}

export default BootstrapCard;