import React from 'react';

const ShowUser = (props) => {
    let { handleReset, userInfo } = props
    return (
        <React.Fragment>
            <form onSubmit={handleReset}>
                <h5>First name: {userInfo["First_name"]}</h5>
                <h5>Last name: {userInfo["Last_name"]}</h5>
                <h5>Phone number: {userInfo["Phone"]}</h5>
                <h5>E-mail: {userInfo["Email"]}</h5>
                <button type="submit">Reset</button>
            </form>
        </React.Fragment>
    )
}

export default ShowUser;