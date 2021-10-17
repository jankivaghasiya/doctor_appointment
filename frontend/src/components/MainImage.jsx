import React, { Component } from "react";

class Mainimage extends Component {
    render() {
        return (
            <div>
            <img
                src={require("../asset/slider_imgs/main.jpg").default}
                alt="1"
                className="mainimage"
            />
            </div>
        );
    }
}

export default Mainimage;
