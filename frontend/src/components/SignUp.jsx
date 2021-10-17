import React, { Component } from "react";
// import validator from "validator";

class Signup extends Component {
    state = {
        fName: "",
        uName: "",
        lName: "",
        email: "",
        password: "",
        password2: "",
    };

    handleChange = (event, propperty) => {
        this.setState({ [propperty]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert("look password is being sent ... " + this.state.password);
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
            }),
        })
            .then((res) => res.json())
            .then(console.log)
            .catch(console.log);
    };

    render() {
        return (
            <div>
                <div className="account">
                    <form className="account-form" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="input"
                            onChange={(event) =>
                                this.handleChange(event, "fName")
                            }
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input"
                            onChange={(event) =>
                                this.handleChange(event, "lName")
                            }
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="input"
                            id="email"
                            onChange={(event) =>
                                this.handleChange(event, "email")
                            }
                        />
                        <input
                            type="text"
                            placeholder="user Name"
                            className="input"
                            onChange={(event) =>
                                this.handleChange(event, "uName")
                            }
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input"
                            onChange={(event) =>
                                this.handleChange(event, "password")
                            }
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input"
                            onChange={(event) =>
                                this.handleChange(event, "password2")
                            }
                        />
                        <button className="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
