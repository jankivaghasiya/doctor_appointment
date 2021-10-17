import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";
import Mainpage from "./components/MainPage";
import Appointment from "./components/Appointment";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {},
        };
    }

    setUser = (user) => {
        this.setState({
            isLoggedIn: true,
            user: user,
        });
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login onLogin={this.setUser} />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    {/* <Route path="/appointment/:doctorId">
                        <Appointment userId={this.state.user._id}/>
                    </Route> */}
                    <Route path="/">
                        <Mainpage loginInfo={this.state} userId={this.state.user._id}/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;