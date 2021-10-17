import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

class Header extends Component {
    render() {
        const { loginInfo } = this.props;
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
                                    specialists
                                </ScrollLink>
                                <div className="line"></div>
                            </li>
                            <li>
                                <Link className="link" to="/">
                                    contact us
                                </Link>
                                <div className="line"></div>
                            </li>
                            {loginInfo.isLoggedIn ? (
                                <li>
                                    <div className="user">
                                        <Link to="/login" className="link logged-in" 
                                        title={`logged in as ${loginInfo.user.firstName}`}>
                                            {loginInfo.user.userName}
                                        </Link>
                                    </div>
                                    {/* <div className="line"></div> */}
                                </li>
                            ) : (
                                <ul>
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
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
