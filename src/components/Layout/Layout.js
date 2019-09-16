import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';


const Layout = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Route path="/" exact component={Home} />
            </Router>
        </React.Fragment>
    );
}

export default Layout;