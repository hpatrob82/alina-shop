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
import Footer from './components/footer/Footer';

function App() {
  <div className="fullHeight">
        <Header />
  </div>
  return (
    <Router>
       <Header/>
    <div className="App">
    
      <Switch>
   <Route exact path="/" component={Homepage} />
   <Route path="/registration" component={Registration} />
  
   </Switch>
     
    </div>
   
    <Footer/>
    </Router>
  );
}

export default App;
