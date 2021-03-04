import React from 'react';
import './UserData.css';

const UserData = (props) => {
    let { handleSubmit } = props
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <InputWithLabel id="first_name" label="First_name" type="text" placeholder="First name"/><br/>
                <InputWithLabel id="last_name" label="Last_name" type="text" placeholder="Last name"/><br/>
                <InputWithLabel id="phone" label="Phone" type="number" placeholder="Phone number"/><br/>
                <InputWithLabel id="email" label="Email" type="email" placeholder="E-mail"/><br/>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

const InputWithLabel = (props) => {
    let { id, label, type, placeholder } = props
    return (
        <React.Fragment>
            <label 
                htmlFor={id}
                id={label}
                ></label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required
            />
        </React.Fragment>
    );
}

export default UserData;