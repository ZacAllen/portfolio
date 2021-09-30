import React, {Component} from "react";
import { Row, Col, Divider, Switch } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'
import { slide as Menu } from 'react-burger-menu'
import logo from './logo.png';
import logodark from './logodark.png';

class Nav extends Component {
    showSettings (event) {
        event.preventDefault();
      }

    render() {
        var dark = false;
        const switchDarkMode = (btn) => {
            let on = document.getElementById('on');
            let off = document.getElementById('off');
            let logoImg = document.getElementById('logo');

            on.className = "buttonActive";
                on.style.color = "#FFFFFF";
            off.className = "buttonInactive";

            logoImg.src = logodark;

            let root = document.documentElement;
            root.style.setProperty('--bs-primaryColor', '#212529');
            root.style.setProperty('--bs-fontColor', '#FFFFFF');
            root.style.setProperty('--bs-activeButtonBGColor', '#FFFFFF');
            root.style.setProperty('--bs-bgOpacityValue', 0.1);
            root.style.setProperty('--bs-grayscale', 'grayscale(50%)');
            root.style.setProperty('--bs-resumeSwoop', '#FFFFFF');
        }

        const offDarkMode = (btn) => {
            let on = document.getElementById('on');
            let off = document.getElementById('off');
            let logoImg = document.getElementById('logo');

            off.className = "buttonActive";
                on.style.color = "#000000";
            on.className = "buttonInactive";

            logoImg.src = logo;

            let root = document.documentElement;
            root.style.setProperty('--bs-primaryColor', '#FFFFFF');
            root.style.setProperty('--bs-fontColor', '#000000');
            root.style.setProperty('--bs-activeButtonBGColor', '#000000')
            root.style.setProperty('--bs-bgOpacityValue', 0.3);
            root.style.setProperty('--bs-grayscale', 'grayscale(0%)');
            root.style.setProperty('--bs-resumeSwoop', 'var(--bs-primaryColor)');
        }

        const switchDarkModeMobile = () => {
            if (!dark) {
                let on = document.getElementById('on');
                let off = document.getElementById('off');
                let logoImg = document.getElementById('logoMobile');
                let onMobile = document.getElementById('onMobile');

                on.className = "buttonActive";
                    on.style.color = "#FFFFFF";
                off.className = "buttonInactive";
                onMobile.innerHTML = "Dark Mode (On)"

                logoImg.src = logodark;

                let root = document.documentElement;
                root.style.setProperty('--bs-primaryColor', '#212529');
                root.style.setProperty('--bs-fontColor', '#FFFFFF');
                root.style.setProperty('--bs-activeButtonBGColor', '#FFFFFF');
                root.style.setProperty('--bs-bgOpacityValue', 0.1);
                root.style.setProperty('--bs-grayscale', 'grayscale(50%)');
                root.style.setProperty('--bs-resumeSwoop', '#FFFFFF');
                dark = true;
            } else {
                let on = document.getElementById('on');
                let off = document.getElementById('off');
                let logoImg = document.getElementById('logoMobile');
                let onMobile = document.getElementById('onMobile');

                off.className = "buttonActive";
                    // off.style.color = "#FFFFFF";
                on.className = "buttonInactive";
                onMobile.innerHTML = "Dark Mode (Off)"

                logoImg.src = logo;

                let root = document.documentElement;
                root.style.setProperty('--bs-primaryColor', '#FFFFFF');
                root.style.setProperty('--bs-fontColor', '#000000');
                root.style.setProperty('--bs-activeButtonBGColor', '#000000')
                root.style.setProperty('--bs-bgOpacityValue', 0.3);
                root.style.setProperty('--bs-grayscale', 'grayscale(0%)');
                root.style.setProperty('--bs-resumeSwoop', 'var(--bs-primaryColor)');
                dark = false;
            }
        }
            
        return (
            <Row>
                <Col xl={{span:23,offset:1}} xs = {0}>
                    <div className = 'NavComponent'>
                        <nav  id = "myNavbar" className="navbar navbar-expand-md navbar-dark fixed-top">
                            <div className="container navContainer">
                            <a className="navbar-brand abs px-5"><img id="logo" src={logo} style={{height: '50%', width: '50%'}}></img></a>
                            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                    <Scrollspy className="navbar-nav mr-auto" items={['home', 'portfolio', 'resume', 'contact']} currentClassName="active"
                                    offset={-10}>
                                    <li id ="HOME" className="nav-item">
                                        <a id= "homelink" className="nav-link" href="#home">Home</a>
                                    </li>
                                    <li id="PORTFOLIO" className="nav-item">
                                        <a id="portfoliolink" className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li id="RESUME" className="nav-item">
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
                <Col xl={0} xs={{span: 24}}>
                    <div className = 'NavComponent'>
                        <Menu right>
                            <a id="HOME_mobile" className="menu-item" href="#home">Home</a>
                            <a id="PORTFOLIO_mobile" className="menu-item" href="#portfolio">Portfolio</a>
                            <a id="RESUME_mobile" className="menu-item" href="#firstSectionMobile">Resume</a>
                            <a id="CONTACT_mobile" className="menu-item" href="#contact">Contact</a>
                            <a  className="menu-item" ><span id= "onMobile" className="" onClick={switchDarkModeMobile}>Dark Mode (Off)</span></a>
                            
                        </Menu>
                        <nav  id = "myNavbar" className="navbar navbar-expand-sm navbar-dark fixed-top">
                            <div className="container navContainer">
                                <a className="navbar-brand abs"><img id="logoMobile" src={logo} style={{height: '30%', width: '30%'}}></img></a>
                                
                                <a className="px-5" id = "menuTitle">Menu</a>
                               
                                
                                
                            </div>
                        </nav>             
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Nav;