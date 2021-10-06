import React, { Component } from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
    <div>
      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p> Doctor appointment app bla bla blaaaa...</p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="#">+91 98765 43210</a>
              </div>
              <div className="email">
                <a href="#"> doc.app@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic"> Our Services </div>
            <div>
              <a href="#"> Child specialist </a>
            </div>
            <div>
              <a href="#"> Women Specialist </a>
            </div>
            <div>
              <a href="#"> ENT </a>
            </div>
            <div>
              <a href="#"> Orthopedic </a>
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
