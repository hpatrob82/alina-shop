import React from 'react';
import './styles.scss'; 
import { Link } from 'react-router-dom';
const Header = props => {
    return (
        <header className="header">
            <h1>Welcome to Alina Style Boutique!</h1>
            <div className="wrap">
            
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to='/Registration'>
                            Register
                            </Link>
                        </li>
                    </ul>
                </div>
          
        </header>
    );

}
export default Header;