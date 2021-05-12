import React, { Component } from "react";
import "./styles.scss";
import Button from "./../forms/Button";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "./../../firebase/utils";
import FormInput from "./../input/FormInput";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="signIn">
        <div className="wrap">
          <h2> Login - Acceso Aqui</h2>

          <div className="fromWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="Password"
                value={password}
                placeholder="Password"
                handleChange={this.handleChange}
              />
              <Button type="submit">Log In</Button>
              <div className="socialSignin">
                <div className="row">
                  <GoogleButton onClick={signInWithGoogle} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
