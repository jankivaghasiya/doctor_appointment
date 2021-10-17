import React, { Component } from "react";
import { withRouter } from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (event, propperty) => {
        this.setState({ [propperty]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data !== null) {
                    this.props.onLogin(data);
                    this.props.history.push("/");
                }
            })
            .catch(console.log);
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

export default withRouter(Login);
