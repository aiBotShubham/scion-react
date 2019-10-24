import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Home } from "../home/home.component";
import  User  from "../user/user.component";
class Ai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discription: "Machine learning is a subfield of artificial intelligence (AI). The goal of machine learning generally is to understand the structure of data and fit that data into models that can be understood and utilized by people.",
      users: [
        { id: 12314, username: "name", about: "About user" },
        { id: 12315, username: "name", about: "About user" },
        { id: 12316, username: "name", about: "About user" },
        { id: 123147, username: "name", about: "About user" },
        { id: 123148, username: "name", about: "About user" },
        { id: 123149, username: "name", about: "About user" }
      ]
    };
  }
  render() {
    return (
      <Router>
      <div>
        <h1>Welcome to Ai scion</h1>
        <p>
          Here is the list of users pursuing AI click to see thereir journeys
        </p>
        <ul>
          {this.state.users.map(user => {
            let route_user = "/users/" + user.id;
            return (
            <ul>
              <li>{user.username}</li>
              <li>{user.about}</li>
              <Link to={route_user}>Visit Journey</Link>
            </ul>)})}
        </ul>
        
      </div>
      <Switch>
      <Route path={"/users/:id"} component={User} />
      </Switch>
      </Router>
    );
  }
}

export default Ai;
