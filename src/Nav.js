import React, {Component} from "react";
import { Row, Col, Divider, Switch } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {
    render() {
        return (
            <Row>
                <Col xl={{span:23,offset:1}}>
                    <div className = 'NavComponent'>
                        <nav  id = "myNavbar" className="navbar navbar-expand-md navbar-dark fixed-top">
                            <div className="container navContainer">
                            <a className="navbar-brand abs px-5">TEMP</a>
                            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a id= "homelink" className="nav-link" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="portfoliolink" className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id = "aboutlink" className="nav-link" href="#resume">Resume</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id = "contactlink" className="nav-link" href="#contact">Contact</a>
                                    </li>
                                    <li className="nav-item darkMode">
                                        <a id= "darkMode" className="nav-link darkMode">Dark Mode:</a>
                                    </li>
                                    <li className="nav-item modeContainer">
                                        <a id= "" className="nav-link" href=""><span className="buttonInactive">On</span></a>
                                    </li>
                                    <li className="nav-item modeContainer">
                                        <a id= "" className="nav-link" href=""><span className="buttonActive">Off</span></a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </nav>             
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Nav;