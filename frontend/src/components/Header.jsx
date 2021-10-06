import React, { Component } from "react";
import "../App.css";
import "./header.css";

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
                                <a href="./">Home</a>
                                <div className="line"></div>
                            </li>
                            <li>
                                <a href="#categories">Categories</a>
                                <div className="line"></div>
                            </li>
                            <li>
                                <a href="./">Contact Us</a>
                                <div className="line"></div>
                            </li>
                            <li>
                                <a href="./">Login</a>
                                <div className="line"></div>
                            </li>
                            <li>
                                <a href="./">Sign in</a>
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
