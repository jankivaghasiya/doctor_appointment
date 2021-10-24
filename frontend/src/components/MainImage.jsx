import React, { Component } from "react";
import { Link } from "react-router-dom";

class Mainimage extends Component {
    render() {
        return (
            <div className="main-image">
                <img src={require("../asset/main_image.png").default} alt="1" />
                <Link to="/diagnosis" className="img-btn">
                    Symptom-Checker
                </Link>
            </div>
        );
    }
}

export default Mainimage;
