import React, { useState } from 'react';

function SearchBox(props) {

    const [text, setText] = useState('');

    const mySearch = (event) => {
        setText(event.target.value)
    }

    const { btn } = props;
    return (
        <div className="tc pa3">
            <input
                type="search"
                placeholder="Search fo robots"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={mySearch} />
            <button
                className="pa3 ba"
                onClick={() => btn(text)}
            > Search </button>
        </div>
    )
}

export default SearchBox;