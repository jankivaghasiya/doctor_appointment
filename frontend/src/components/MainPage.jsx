import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mainimage from "./MainImage";
import Content from "./Content";
import { Route, Switch } from "react-router-dom";
import Appointment from "./Appointment";
import Mybookings from "./MyBookings";
import Pagenotfound from "./PageNotFound";
import Diagnosis from "./Diagnosis";
import Aboutus from "./AboutUs";

class Mainpage extends Component {
    state = {
        bookingsKey: Date.now(),
    };

    remountBookings = () => {
        this.setState({ bookingsKey: Date.now() });
    };

    render() {
        return (
            <div className="main-page">
                <Header
                    loginInfo={this.props.loginInfo}
                    onLogout={this.props.onLogout}
                />
                <Switch>
                    <Route path="/appointment/:doctorId" exact>
                        <Appointment loginInfo={this.props.loginInfo} />
                    </Route>
                    <Route path="/mybookings/:userId" exact>
                        <Mybookings
                            key={this.state.bookingsKey}
                            loginInfo={this.props.loginInfo}
                            remount={this.remountBookings}
                        />
                    </Route>
                    <Route path="/diagnosis" exact>
                        <Diagnosis />
                    </Route>
                    <Route path="/about">
                        <Aboutus />
                    </Route>
                    <Route path="/" exact>
                        <Mainimage />
                        <Content />
                        <Footer />
                    </Route>
                    <Route>
                        <Pagenotfound />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Mainpage;
