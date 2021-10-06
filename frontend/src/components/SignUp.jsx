import React, { Component } from "react";
import "./signup.css";
import validator from "validator";

class Signup extends Component {
//   state = {
//     email: "",
//   };

//   handleBlur = () => {
//     if (!validator.isEmail(this.state.email)) {
//       alert("Invalid Email");
//     }
//   };

  render() {
    return (
      <div>
        <div className="login">
          <form className="login-form">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input
              type="text"
              placeholder="Email"
              className="input"
              id="email"
            //   value={this.state.email}
            //   onBlur={this.handleBlur}
            />
            <input type="password" placeholder="Password" className="input" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
            <button className="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
