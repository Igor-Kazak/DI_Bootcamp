import React from 'react';
import './UserData.css';

const UserData = (props) => {
    let { handleSubmit } = props
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <InputWithLabel id="title" label="Title" type="text" /><br/>
                <InputWithLabel id="author" label="Author" type="text" /><br/>
                <InputWithLabel id="genre" label="Genre" type="text" /><br/>
                <InputWithLabel id="year" label="Year" type="number" /><br/>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>

    )
}

const InputWithLabel = (props) => {
    let { id, label, type } = props
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                required
            />
        </>
    );
}

export default UserData;