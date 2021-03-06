import React from 'react';

const SearchBox = (props) => {
    let { handleChange } = props
    return (
        <React.Fragment>
                <input id="textInp" type="text" placeholder="Enter country" onChange={handleChange}/>
        </React.Fragment>
    )
}

export default SearchBox;
