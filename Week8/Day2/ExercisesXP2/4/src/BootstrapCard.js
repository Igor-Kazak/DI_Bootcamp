import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function BootstrapCard(props) {

    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
      };
      if (colorClasses[props.color]){
        return (
            <div className={`alert ${colorClasses[props.color]}`} role="alert">
                {props.text}
            </div>
        );
        }
        else {
            alert(`${props.color} is not in the list`)
            return (
                <div className="alert" role="alert">
                    {props.text}
                </div>
            );
        }

}

export default BootstrapCard;