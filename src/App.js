import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Tree } from "./components/tree/tree.component";
import  Home from "./components/home/home.component";
import { Landing } from "./components/landing/landing.component";
import SignInForm from "./components/signin/signin.component";
import SignUpPage from "./components/signUp/signUp.component";
import Navigation from "./components/nav/nav.component";
import { withFirebase } from './components/Firebase';

import  Ai  from "./components/ai/ai.component";


import * as ROUTES from "./constants/routes";

    class App extends Component {
      constructor(props) {
        super(props);

    this.state = {
      noOfUsers: 1,
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }



  render() {
    return (
      // <//div>
      // <//Tree branches={this.state.users[0].paths} add={this.onAddlink} id = {1}/>
      // <button onClick = {(e) => this.addBranch(1,"newNode",e)}>Add Branch</button>
      // <///div>
      //<Home />
      <Router>
        <Navigation authUser={this.state.authUser} />
        <hr />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInForm} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route
          path={ROUTES.TREE}
          render={props => (
            <div>
              <Tree
                {...props}
                branches={this.state.users[0].paths}
                add={this.onAddlink}
                id={1}
              />
              <button onClick={e => this.addBranch(1, "newNode", e)}>
                Add Branch
              </button>
            </div>
          )}
        />
        <Route path={ROUTES.AI} component={Ai} />
        <Route path={ROUTES.WEB} component={Ai} />
        <Route path={ROUTES.APP} component={Home} />
        <Route path={ROUTES.PM} component={Home} />
      </Router>
    );
  } 
}

export default withFirebase(App);
