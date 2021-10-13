import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container container-header">
          <div className="logo">
            <h1>YouHeal Hospital</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
                <div className="line"></div>
              </li>
              <li>
                <ScrollLink to="categories" className="link">
                  Categories
                </ScrollLink>
                <div className="line"></div>
              </li>
              <li>
                <Link className="link" to="/">
                  contact us
                </Link>
                <div className="line"></div>
              </li>
              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
                <div className="line"></div>
              </li>
              <li>
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
                <div className="line"></div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
