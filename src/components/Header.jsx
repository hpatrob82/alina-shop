import React from 'react';
import './styles.scss'; 
import { Link } from 'react-router-dom';
const Header = props => {
    return (
        <header className="header">
            
            <div className="wrap">
            
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to='/Registration'>
                            Register
                            </Link>
                        </li>
                        <li>
                            <Link to='/login'>
                            Login
                            </Link>
                           
                        </li>
                        <li>
                        <Link to='/homepage'>
                                
                                </Link>
                        </li>
                    </ul>
                </div>
          
        </header>
    );

}
export default Header;