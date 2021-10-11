import React, { Component } from "react";
import "./styles.css";

class Login extends Component {
  render() {
    return (
      <div className="account">
        <form className="account-form">
          <input type="text" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
