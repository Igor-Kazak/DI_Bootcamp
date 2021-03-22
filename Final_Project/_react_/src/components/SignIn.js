import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSignIn, userAsyncLogin, userAsyncRegister, handleClearMsg } from '../redux/actions'

class UserLogin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class UserRegister {
    constructor(username, password, lastname, firstname, email) {
        this.username = username;
        this.password = password;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
    }
}

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginmessage: '',
        }
    }

    componentDidMount() {
    }

    componentDidUpdate = () => {
        setTimeout(() => this.props.clearMsg(), 3000);
    }

    userCheckLogin = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if (username !== '' && password !== '') {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            this.props.userLogin(new UserLogin(username, password));
        }
        else {
            document.getElementById('loginmessage').textContent = 'Enter username and password!';
            setTimeout(() => {document.getElementById('loginmessage').textContent = ''}, 3000);
        }
    }

    userCheckRegister = () => {
        let username = document.getElementById('usernamereg').value;
        let password = document.getElementById('passwordreg').value;
        let lastname = document.getElementById('lastname').value;
        let firstname = document.getElementById('firstname').value;
        let email = document.getElementById('email').value;
        if (username !== '' && password !== '' && lastname !== '' && firstname !== '' && email !== '') {
            this.props.userRegister(new UserRegister(username, password, lastname, firstname, email));
            document.getElementById('usernamereg').value = '';
            document.getElementById('passwordreg').value = '';
            document.getElementById('lastname').value = '';
            document.getElementById('firstname').value = '';
            document.getElementById('email').value = '';
        }
        else {
          document.getElementById('registermessage').textContent = 'Enter all data!';
          setTimeout(() => {document.getElementById('registermessage').textContent = ''}, 3000);
        }
      
    }

    render() {

        const { signedIn, loginMsgFromServer, regFail } = this.props;

        if (signedIn) {
            return (
                <Redirect to='/' />
            )
        }
        else {
            return (
                <React.Fragment>

                    <div id="login" className="container">
                        <p style={{ fontWeight: 'bold' }}>LOGIN FORM:</p>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="username">Enter the username:</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="username" required />
                                </div>
                                <div className="col">
                                    <label htmlFor="password">Enter the password:</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="password" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p style={{ color: 'red' }} id="loginmessage">{loginMsgFromServer}</p>
                                </div>
                                <div className="col colforbutton">
                                    <button type="button" id="loginbutton" name="login"
                                        className="btn btn-sm btn-outline-secondary mt-3" onClick={this.userCheckLogin}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div id="register" className="container mt-5">
                        <p style={{ fontWeight: 'bold' }}>REGISTER FORM:</p>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="firstname">Enter the first name:</label>
                                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="first name" />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastname">Enter the last name:</label>
                                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="last name" />
                                </div>
                                <div className="col">
                                    <label htmlFor="email">Enter the e-mail:</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="e-mail" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="username">Enter the username:</label>
                                    <input type="text" className="form-control" id="usernamereg" name="usernamereg" placeholder="username" />
                                </div>
                                <div className="col">
                                    <label htmlFor="password">Enter the password:</label>
                                    <input type="password" className="form-control" id="passwordreg" name="passwordreg" placeholder="password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p style={{ color: 'red' }} id="registermessage">{regFail}</p>
                                </div>
                                <div className="col colforbutton">
                                    <button type="button" id="registerbutton" name="register"
                                        className="btn btn-sm btn-outline-secondary mt-3" onClick={this.userCheckRegister}>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.reducerOne.signedIn,
        loginMsgFromServer: state.reducerOne.loginAttempt,
        regFail: state.reducerOne.registerFail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInSwitch: (value) => dispatch(handleSignIn(value)),
        userLogin: (user) => dispatch(userAsyncLogin(user)),
        userRegister: (newUser) => dispatch(userAsyncRegister(newUser)),
        clearMsg: () => dispatch(handleClearMsg()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
