import React, {Component} from "react";
import { Row, Col, Divider, Switch } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'

class Nav extends Component {

    render() {

        const switchDarkMode = (btn) => {
            console.log("TIME FOR DARKNESS!!!")
            let on = document.getElementById('on');
            let off = document.getElementById('off');

            on.className = "buttonActive";
                on.style.color = "#FFFFFF";
            off.className = "buttonInactive";

            let root = document.documentElement;
            root.style.setProperty('--bs-primaryColor', '#212529');
            root.style.setProperty('--bs-fontColor', '#FFFFFF');
            root.style.setProperty('--bs-activeButtonBGColor', '#FFFFFF');
            root.style.setProperty('--bs-bgOpacityValue', 0.1)
        }

        const offDarkMode = (btn) => {
            let on = document.getElementById('on');
            let off = document.getElementById('off');

            off.className = "buttonActive";
                // off.style.color = "#FFFFFF";
            on.className = "buttonInactive";

            let root = document.documentElement;
            root.style.setProperty('--bs-primaryColor', '#2de664');
            root.style.setProperty('--bs-fontColor', '#000000');
            root.style.setProperty('--bs-activeButtonBGColor', '#000000')
            root.style.setProperty('--bs-bgOpacityValue', 0.3)
        }
            
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
                                        <a id = "aboutlink" className="nav-link" href="#firstSection">Resume</a>
                                    </li>
                                    <li id="CONTACT" className="nav-item">
                                        <a id = "contactlink" className="nav-link" href="#contact">Contact</a>
                                    </li>
                                    
                                    <li className="nav-item darkMode">
                                        <a id= "darkMode" className="nav-link darkMode">Dark Mode:</a>
                                    </li>
                                    <li className="nav-item modeContainer">
                                        <a  className="nav-link" ><span id= "on" className="buttonInactive" onClick={switchDarkMode}>On</span></a>
                                    </li>
                                    <li className="nav-item modeContainer">
                                        <a className="nav-link" ><span id= "off" className="buttonActive" onClick={offDarkMode}>Off</span></a>
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