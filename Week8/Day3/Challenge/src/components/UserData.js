import React from 'react';
import './UserData.css';

const UserData = (props) => {
    let { handleSubmit, handleChange } = props
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <input name="firstname" type="text" placeholder="First name"/><br/>
                <input name="lastname" type="text" placeholder="Last name" required/><br/>
                <input name="age" type="number" placeholder="Age" required/><br/>
                <label><input type="radio" name="gender" value="Female" required/>Female</label><br/>
                <label><input type="radio" name="gender" value="Male" required/>Male</label><br/>
                <label><strong>Select your destination:</strong></label><br/>
                <select name="destination">
                    <option>--Please select your destination--</option>
                    <option value="kongo">Kongo</option>
                    <option value="popua">Popua</option>
                    <option value="somali">Somali</option>
                </select><br/>
                <label><strong>Dietary restrictions:</strong></label><br/>
                <input name="nutsfree" type="checkbox"/>Nuts free<br/>
                <input name="lactosfree" type="checkbox"/>Lactose free<br/>
                <input name="vegan" type="checkbox"/>Vegan<br/>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default UserData;