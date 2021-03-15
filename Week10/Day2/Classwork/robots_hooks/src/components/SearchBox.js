import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

function SearchBox(props) {

    const {myButton} = useContext(AppContext);

    const [text, setText] = useState('');

    const mySearch = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="tc pa3">
            <input
                type="search"
                placeholder="Search fo robots"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={mySearch} />
            <button
                className="pa3 ba"
                onClick={() => myButton(text)}
            > Search </button>
        </div>
    )
}

export default SearchBox;