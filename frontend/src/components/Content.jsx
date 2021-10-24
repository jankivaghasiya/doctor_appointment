import React, { Component } from "react";
// import { Route, Switch } from "react-router";
// import Appointment from "./Appointment";
import Specialists from "./Specialists";
import Testimonial from "./Testimonial";

class Content extends Component {
    render() {
        return (
            <div>
                <Specialists />
                <Testimonial />
            </div>
        );
    }
}

export default Content;
