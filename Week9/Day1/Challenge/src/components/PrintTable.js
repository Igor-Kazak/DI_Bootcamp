import React from 'react';

const PrintTable = (props) => {
    let { content, id, handleMouse, handleClick, handleOut } = props
    return (
        <React.Fragment>
            <li id={id} onMouseOver={handleMouse} onClick={handleClick} 
            onMouseOut={handleOut} className="list-group-item"
            >{content}</li>
        </React.Fragment>
    )
}

export default PrintTable;