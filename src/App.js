import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './components/default.scss';
import './components/styles.scss';
import './components/Header.jsx';
import Header from './components/Header';
// Pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './components/registration/Registration'


function App() {
  <div className="fullHeight">
        <Header />
  </div>
  return (
    <Router>
    <div className="App">
    
      <Switch>
   <Route exact path="/" component={Homepage} />
   <Route path="/registration" component={Registration} />
  
   </Switch>
     
    </div>
    
    </Router>
  );
}

export default App;
