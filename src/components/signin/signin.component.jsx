import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../signUp/signUp.component";
import { withFirebase } from "../Firebase";
import './style.css';
import logo from "./image.jpg";
import * as ROUTES from "../../constants/routes";
const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <div className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={logo} />
              </figure>
              <Link to={ROUTES.SIGN_IN} className="signup-image-link">
                Create an account
              </Link>
              <div className="signin-form">
                <h2 className="form-title">Sign in</h2>
                <form
                  onSubmit={this.onSubmit}
                  className="register-form"
                  id="login-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                      disabled={isInvalid}
                    />
                  </div>
                  {error && <p>{error.message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);
export default SignInPage;
export { SignInForm };
