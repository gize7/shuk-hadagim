import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import './Navbar.scss';

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li>
                        <Link to="#">ספיישל השבוע</Link>
                    </li>
                    <li>
                        <Link to="#">דגים טריים</Link>
                    </li>
                    <li>
                        <Link to="#">מתכוני דגים</Link>
                    </li>
                    <li>
                        <Link to="#">יינות</Link>
                    </li>
                    <li>
                        <Link to="#">אזורי חלוקה</Link>
                    </li>
                    <li>
                        <Link to="#">צור קשר</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Navbar;