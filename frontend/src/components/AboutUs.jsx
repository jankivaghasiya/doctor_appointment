import React, { Component } from "react";
import Contactus from "./ContactUs";
import Ourteam from "./OurTeam";
import Testimonial from "./Testimonial";

class Aboutus extends Component {
    render() {
        return (
            <React.Fragment>
                <Ourteam />
                <Contactus />
                <Testimonial />
            </React.Fragment>
        );
    }
}

export default Aboutus;
