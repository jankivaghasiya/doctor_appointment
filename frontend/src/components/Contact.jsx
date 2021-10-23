import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
        <>
        <div className="contact">
        <div className="contact-form">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">xyz</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+91 98765 43210</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">jagdishtilokani01@gmail.com</div>
        </div>
        <div className="media details">
              <div className="media-icons">
                <Link to="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
              
            <div className="topic"> Social Media </div>
            </div>
      </div>
      <div className="right-side">
        <div className="topic-text"><h3>Get in Touch with Us</h3></div>
        <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
        <input type="text" placeholder="Enter your Message"/>
        </div>
        <div className="button">
          <input type="button" value="Submit" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
      </>
    );
  }
}

export default Contact;