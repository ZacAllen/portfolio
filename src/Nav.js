import React, {Component} from "react";
import { Row, Col, Divider, Switch } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'

class Nav extends Component {
    componentDidMount() {
        const navElements = document.getElementById("myNavbar").getElementsByClassName("nav-item");
        const homeContainer = document.getElementById("aboutContent");
        const portfolioContainer = document.getElementById("myProjects");
        const resumeContainer = document.getElementById("resume");
        const contactContainer = document.getElementById("contactTitle")
    }
    render() {

        
            
            // const navElements = "";
            
            
            
            
        return (
            <Row>
                <Col xl={{span:23,offset:1}}>
                    <div className = 'NavComponent'>
                        <nav  id = "myNavbar" className="navbar navbar-expand-md navbar-dark fixed-top">
                            <div className="container navContainer">
                            <a className="navbar-brand abs px-5">Z.ALLEN</a>
                            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                    <Scrollspy className="navbar-nav mr-auto" items={['home', 'portfolio', 'resume', 'contact']} currentClassName="active"
                                    offset={-10}>
                                    <li id ="HOME" className="nav-item">
                                        <a id= "homelink" className="nav-link" href="#home">Home</a>
                                    </li>
                                    <li id="PORTFOLIO" className="nav-item">
                                        <a id="portfoliolink" className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li id="ABOUT" className="nav-item">
                                        <a id = "aboutlink" className="nav-link" href="#resume">Resume</a>
                                    </li>
                                    <li id="CONTACT" className="nav-item">
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
                                    </Scrollspy>
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