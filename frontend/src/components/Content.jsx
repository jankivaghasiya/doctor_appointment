import React, { Component } from "react";
// import { Route, Switch } from "react-router";
// import Appointment from "./Appointment";
import Specialists from "./Specialists";

class Content extends Component {
    render() {
        return (
            <div>
                {/* <Switch>
                    <Route path="/appointment">
                        <Appointment />
                    </Route>
                    <Route>
                        <Specialists />
                    </Route>
                </Switch> */}
                <Specialists />
            </div>
        );
    }
}

export default Content;
