import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Catagory";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// import {useEffect, useState} from 'react'
// import axios from 'axios'

// const App = () => {
//   const [users, setUsers] = useState([])
//   const getData = async() => {
//     const res = await axios.get('/api/users')
//     setUsers(res.data)
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <div>
//       {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
//     </div>
//   )
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <div>
              <Header />
              <Category />
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
