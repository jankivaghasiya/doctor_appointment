import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Mainpage from "./components/MainPage";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        let isLoggedIn = false;
        let user = localStorage.getItem("user");
        if (user) {
            isLoggedIn = true;
            user = JSON.parse(user);
        } else {
            user = {};
        }

        this.state = {
            isLoggedIn: isLoggedIn,
            user: user,
        };
    }

    setUser = (user) => {
        this.setState({
            isLoggedIn: true,
            user: user,
        });
    };

    handleLogout = () => {
        localStorage.clear();
        this.setState({ isLoggedIn: false, user: {} });
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact>
                        <Login onLogin={this.setUser} />
                    </Route>
                    <Route path="/signup" exact>
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <Mainpage
                            loginInfo={this.state}
                            userId={this.state.user._id}
                            onLogout={this.handleLogout}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
