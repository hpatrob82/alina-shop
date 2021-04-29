import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/default.scss";
import "./components/styles.scss";
import "./components/Header.jsx";
import Header from "./components/Header";
// Pages
import "./components/shopping/ProductList";
import "./components/shopping/AddProduct"
import "./components/shopping/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage/Homepage";
import Registration from "./components/registration/Registration";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import { auth } from "./firebase/utils";

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
      products: []
    };
    this.routerRef = React.createRef()
  }

  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) {
        this.setState({
          ...initialState
        });
        }
      

      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    <div className="fullHeight">
     
    </div>;
    return (
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} currentUser={currentUser}/>
            <Route path="/registration" component={Registration} currentUser={currentUser}/>
            <Route path="/login" component={Login} currentUser={currentUser}/>
          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}
export default App;
