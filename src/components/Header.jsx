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
<div className="callToActions">
  {currentUser && (
    <ul>
      <li>
        <button onClick={() => auth.signOut()}>
          Log Out
        </button>
      </li>
    </ul>
  )}
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
       
      </ul>
     </div>
    </header>
  );
};
Header.defaultProps = {
  currentUser: null,
};
export default Header;
{/* <div className={currentUser}>
<button onClick={() => auth.signOut()}>Logout</button>
</div> */}