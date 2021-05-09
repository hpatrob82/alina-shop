import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./components/default.scss";
import "./components/styles.scss";
import "./components/Header.jsx";

// Pages
import MainLayout from "./layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/pages/Homepage/Homepage";
import Registration from "./components/registration/Registration";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import { auth, handleUserProfile } from "./firebase/utils";

const initialState = {
  currentUser: null,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      user: null,
      cart: {},
      products: [],
    };
    this.routerRef = React.createRef();
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    <div className="container"></div>;
    return (
      <Router ref={this.routerRef}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => currentUser ? <Redirect to ="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
          <Route path="/login" component={Login} currentUser={currentUser} />
          <div className={currentUser}>
          <button onClick={() => auth.signOut()}>Logout</button>
      </div>
        </Switch>
        

        <Footer />
      </Router>
    );
  }
}
export default App;
