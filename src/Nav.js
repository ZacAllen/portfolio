import React, {Component} from "react";
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

class Nav extends Component {
    render() {
        return (
            <div className = 'NavComponent'>
                <nav  id = "myNavbar" className="navbar navbar-expand-md navbar-dark fixed-top">
                    <a className="navbar-brand abs px-5">TEMP</a>
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a id= "homelink" className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a id = "aboutlink" className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a id="portfoliolink" className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a id = "contactlink" className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default Nav;