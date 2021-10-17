import React, { Component } from "react";

class Mainimage extends Component {
    render() {
        return (
            <img
                src={require("../asset/slider_imgs/main.jpg").default}
                alt="1"
                width="100%"
                height="20%"
            />
        );
    }
}

export default Mainimage;
