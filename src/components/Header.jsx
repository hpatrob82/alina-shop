import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { auth } from "./../firebase/utils";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Header = (props) => {
  const { currentUser } = props;


  return (
    <header className="header">
      <div className="wrap"></div>

      <ul>
        <li>
          <Link to="/Registration">Register</Link>
        </li>
        <li>
          <Link to="/login">
            Login <FiLogIn />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaHome />
          </Link>

        </li>
        <div className={currentUser}>
          <button onClick={() => auth.signOut()}>Logout</button>
      </div>
      </ul>
     
    </header>
  );
};
Header.defaultProps = {
  currentUser: null,
};
export default Header;
