import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="content">
                        <div className="left box">
                            <div className="topic">About us</div>
                            <p>
                                YouHeal is on a mission to make quality
                                healthcare affordable and accessible for over a
                                billion+ Indians.
                            </p>
                        </div>
                        <div className="middle box">
                            <div className="topic">Contact us</div>
                            <div className="phone">
                                <Link to="/">+91 98765 43210</Link>
                            </div>
                            <div className="email">
                                <Link to="/"> jagdishtilokani01@gmail.com</Link>
                            </div>
                        </div>
                        <div className="right box">
                            <div className="topic"> Social Media </div>
                            <div className="media-icons">
                                <Link
                                    to={{
                                        pathname: "https://www.facebook.com/",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link
                                    to={{
                                        pathname: "https://www.instagram.com/",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link
                                    to={{ pathname: "https://twitter.com/" }}
                                    target="_blank"
                                >
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link
                                    to={{
                                        pathname: "https://www.youtube.com/",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <Link
                                    to={{
                                        pathname: "https://www.linkedin.com/",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
