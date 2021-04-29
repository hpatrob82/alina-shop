import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { auth } from './../firebase/utils';

const Header = (props) => {
  const { currentUser } = props;
  return (
      
    <header className="header">
      <div className="wrap"></div>
      <div className="callToActions">
      {currentUser && (
          <button onClick={() => auth.signOut()}>
              LogOut
          </button>
      )}
        <ul>
          <li>
            <Link to="/Registration">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/homepage"></Link>
          </li>
        </ul>
        
      </div>
    </header>
  );
};
Header.defaultProps = {
  currentUser: null,
};
export default Header;
