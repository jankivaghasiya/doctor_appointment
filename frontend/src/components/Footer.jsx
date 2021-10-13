import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="content">
            <div className="left box">
              <div className="topic">About us</div>
              <p>
                {" "}
                YouHeal is on a mission to make quality healthcare affordable
                and accessible for over a billion+ Indians.
              </p>
            </div>
            <div className="middle box">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="#">+91 98765 43210</a>
              </div>
              <div className="email">
                <a href="#"> youheal@gmail.com</a>
              </div>
            </div>
            <div className="right box">
              <div className="topic"> Social Media </div>
              <div className="media-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
