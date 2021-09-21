import React, {Component, useState, useEffect, useRef, state} from "react";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Divider, Carousel, Image } from 'antd';
// import resume from './ZAllenResume2021.pdf';
import { Parallax } from 'react-scroll-parallax';
import hagia from './hagia.jpg'
import Modal from 'react-modal';
import { Container } from "react-bootstrap";
import Anime from 'react-anime';
import anime from "animejs/lib/anime.es.js";
import lifecycle from 'react-pure-lifecycle';

// var coordinates = document.getElementById('firstSection').getBoundingClientRect();
//         console.log(coordinates.top)


function Resume (props) {
    const [resumeDiv, setDiv1] = useState(null);
    const [navbarDiv, setDiv2] = useState(null);
    const [resumeSticky, setDiv3] = useState(null);

    useEffect(() => {
        setDiv1(document.getElementById("firstSection"));
        setDiv2(document.getElementById("myNavbar"));
        setDiv3(document.getElementById('resume'));
    }, [])

    const animationRef = React.useRef(null);
    const titleAnimation = React.useRef(null);
    const titleAnimationBottom = React.useRef(null);
        React.useEffect(() => {
            animationRef.current = anime ({
                targets: '.dummy',
                // scale: [0, 2],
                scaleX: [1, 40],
                scaleY: [1, 20],
                // translateX: [-section.clientWidth*2, section.clientWidth],
                rotate: 540,
                elasticity: 200,
                easing: 'linear',
                autoplay: false,
                // opacity: 0.7,
                duration: 5000,
                // loop: true
             });


             
        }, [])
        React.useEffect(() => {
            titleAnimation.current = anime ({
                targets: '#resumeTitleTop',
                translateX: [0, 20000],
                elasticity: 200,
                easing: 'linear',
                autoplay: false,
                // opacity: 0.7,
                duration: 5000,
                // loop: true
             });


             
        }, [])
        React.useEffect(() => {
            titleAnimationBottom.current = anime ({
                targets: '#resumeTitleBottom',
                translateX: [20000, -3000],
                elasticity: 200,
                easing: 'linear',
                autoplay: false,
                // opacity: 0.7,
                duration: 5000,
                // loop: true
             });


             
        }, [])


        /**
     * Calculate the scroll percentage position
     */
    const scrollPercent = () => {

        const bodyST = document.body.scrollTop;
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;
        const docCH = document.documentElement.clientHeight;
        
        
        return (docST + bodyST) / (docSH - docCH) * 100

    }

    const getPercentOfView = (element) =>{
        const viewTop = window.pageYOffset;
        const viewBottom = viewTop + window.innerHeight;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + viewTop;
        const elementBottom = elementTop + rect.height;
    
        if (elementTop >= viewBottom || elementBottom <= viewTop) {
            // heigher or lower than viewport
            return 0;
        } else if (elementTop <= viewTop && elementBottom >= viewBottom) { 
            // element is completely in viewport and bigger than viewport
            return 100;
        } else if (elementBottom <= viewBottom) {
            if (elementTop < viewTop) {
                // intersects viewport top
                return Math.round((elementBottom - viewTop) / window.innerHeight * 100);
            } else {
                // completely inside viewport
                return Math.round((elementBottom - elementTop) / window.innerHeight * 100);;
            }
        } else {
            // intersects viewport bottom
            //  elementBottom >= viewBottom && elementTop <= viewBottom
            return Math.round((viewBottom - elementTop) / window.innerHeight * 100);
        }
    }


    function touches(div1, div2) {
        var rect1 = div1.getBoundingClientRect();
        var rect2 = div2.getBoundingClientRect();

        if (rect1.top <= rect2.bottom) {
            console.log("TOUCHING!!!");
            return true;
        }
    }
    /**
     * Add a scroll listener on the window object to
     * control animations based on scroll percentage.
     */
    window.onscroll = () => {
        console.log(getPercentOfView(resumeDiv))
        if (touches(resumeDiv, navbarDiv)  && getPercentOfView(resumeDiv) >= 85) {
            animationRef.current.seek(((scrollPercent() / 100) * animationRef.current.duration) - animationRef.current.duration*.6);
            titleAnimation.current.seek(((scrollPercent() / 100) * titleAnimation.current.duration) - titleAnimation.current.duration*.6);
            titleAnimationBottom.current.seek(((scrollPercent() / 100) * titleAnimationBottom.current.duration) + titleAnimationBottom.current.duration/4);

        } else if (touches(resumeDiv, navbarDiv) && getPercentOfView(resumeDiv) < 100) {
            animationRef.current.seek((getPercentOfView(resumeDiv) / 100) * animationRef.current.duration)
            console.log((getPercentOfView(resumeDiv) / 100) * animationRef.current.duration)

        } else if (!touches(resumeDiv, navbarDiv)) {
            animationRef.current.seek(0)
        }

    };

        const DummyModalStyle = {
            width: '350px',
            height: '350px',
            backgroundColor: 'var(--bs-resumeSwoop)',
            // border: '2px solid var(--bs-primaryColor)',
            position: 'absolute',  
            zIndex: 1000,
            // borderRadius: '50%',
        };
        const ContainerStyle = {
            backgroundColor:"#000000", 
            width: "100vw", 
            height: "300vh",
            position: 'relative',
            display: 'flex',
            // opacity: 0.9
            zIndex: 1
            // zIndex: 1000
        }
        const firstSectionStyle = {
            // backgroundColor: "#FFFFFF",
            position: 'sticky',
            top: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        const paddingContainer = {
            height: '40vh',
            width: '100vw',
        }
        const titleStyleTop = {
            position: 'absolute',
            left: '5%',
            top: '10%'
        }
        const titleStyleBottom = {
            position: 'absolute',
            right: '5%',
            bottom: '10%'
        }
        

        return (
            <div>
                <Row  gutter={[40, 16]} style={paddingContainer}></Row>
                
                <Row gutter={[40, 16]} className="vw-100">
                    <Col xl={{span: 24}}>
                    {/* <Parallax className="custom-class" y={[20, -20]}> */}
                   
                        <div id="firstSection" className="resumeContainer" style={ContainerStyle}>
                            <div id="resume" className="" style={firstSectionStyle}>
                                <div style={titleStyleTop}>
                                    <h1 id="resumeTitleTop" className="resumeTitle">MY RESUME</h1>
                                </div>
                                <div id="dummyModal"className="dummy" style={DummyModalStyle}>
                                    <h3 className="downloadMyResume"></h3>
                                </div>
                                <div style={titleStyleBottom}>
                                    <h1 id="resumeTitleBottom" className="resumeTitle">MY RESUME</h1>
                                </div>
                            </div> 
                        </div>
                        {/* </Parallax> */}
                    </Col>
                    
                </Row>
                
            </div>
        )
    
}

const methods = {
    componentDidMount(props) {

        
        

    
    }
};

export default lifecycle(methods)(Resume);