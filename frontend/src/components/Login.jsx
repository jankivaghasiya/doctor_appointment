import React, { Component } from "react";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (event, propperty) => {
        this.setState({ [propperty]: event.target.value });
    };

    addUser = () => {
        
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.addUser();
    };

    render() {
        return (
            <div className="account">
                <form className="account-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input"
                        onChange={(event) => this.handleChange(event, "email")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        onChange={(event) =>
                            this.handleChange(event, "password")
                        }
                    />
                    <button className="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
