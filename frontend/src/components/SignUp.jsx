import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Signup extends Component {
    state = {
        fName: "",
        uName: "",
        lName: "",
        email: "",
        password: "",
        password2: "",
        contactNo: "",
        errors: {},
        controller: new AbortController(),
    };

    handleChange = (event, propperty) => {
        this.setState({ [propperty]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.password2) {
            let { errors } = this.state;
            errors.password2 = "password and confirm password did not match";
            this.setState({ errors });
            return;
        }
        fetch("/api/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fName: this.state.fName,
                lName: this.state.lName,
                uName: this.state.uName,
                email: this.state.email,
                password: this.state.password,
                contactNo: this.state.contactNo,
            }),
            signal: this.state.controller.signal,
        })
            .then((res) => {
                if (res.status === 400) {
                    res.json().then((errors) => {
                        this.setState({ errors });
                    });
                } else this.props.history.push("/");
            })
            .catch(console.log);
    };

    componentWillUnmount = () => {
        this.state.controller.abort();
    };
    
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="account">
                    <form className="account-form" onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "fName")
                                }
                            />
                            <p className="error">{errors.firstName}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "lName")
                                }
                            />
                            <p className="error">{errors.lastName}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "email")
                                }
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "contactNo")
                                }
                            />
                            <p className="error">{errors.contactNo}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="user Name"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "uName")
                                }
                            />
                            <p className="error">{errors.userName}</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "password")
                                }
                            />
                            <p className="error">{errors.password}</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input"
                                onChange={(event) =>
                                    this.handleChange(event, "password2")
                                }
                            />
                            <p className="error">{errors.password2}</p>
                        </div>
                        <button className="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);
