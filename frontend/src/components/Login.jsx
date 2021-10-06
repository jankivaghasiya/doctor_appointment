import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login" >
                <form className="login-form">
                    <input type="text" placeholder="Email" className="input" />
                    <input type="password" placeholder="Password" className="input" />
                    <button className="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;