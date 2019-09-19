import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [navbar,setNavbar] = useState({
        mobileClass:'navbar',
        mobileMode: false
    });
    const toggleNavbar =()=>{
        const className = navbar.mobileMode === false ? 'navbar show' : 'navbar';
        setNavbar({
            mobileClass: className,
            mobileMode: !navbar.mobileMode   
        })
    }
    

    return (
        <React.Fragment>
            <div className="hamburger">
                <FontAwesomeIcon onClick={toggleNavbar} icon={faBars} />
            </div>
            <div className={navbar.mobileClass}>
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