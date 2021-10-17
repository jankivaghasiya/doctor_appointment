import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mainimage from "./MainImage";
import Content from "./Content";
import { Route, Switch } from "react-router-dom";
import Appointment from "./Appointment";

class Mainpage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header loginInfo={this.props.loginInfo} />
                <Switch>
                    <Route path="/appointment/:doctorId">
                        <Appointment userId={this.props.userId}/>
                    </Route>
                    <Route>
                        <Mainimage />
                        <Content />
                        <Footer />
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Mainpage;
