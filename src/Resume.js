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
import word from './word.svg';
import pdf from './pdf.svg';
import resumePDF from './myResume.pdf';


function Resume (props) {
    const [resumeDiv, setDiv1] = useState(null);
    const [navbarDiv, setDiv2] = useState(null);
    const [resumeSticky, setDiv3] = useState(null);
    const [dummyModal, setDiv4] = useState(null);
    const [modalContents, setDiv5] = useState(null);
    const [resumeDoc, setDiv6] = useState(null);
    const [contact, setDiv7] = useState(null);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    var canPlay = true;
    var firstPlay = 0;

    useEffect(() => {
        setDiv1(document.getElementById("firstSection"));
        setDiv2(document.getElementById("myNavbar"));
        setDiv3(document.getElementById('resume'));
        setDiv4(document.getElementById('dummyModal'));
        setDiv5(document.getElementById('modalContents'));
        setDiv6(document.getElementById('resumePDF'))
        setDiv7(document.getElementById('contactTitle'))
    }, [])


    const animationRef = React.useRef(null);
    const titleAnimation = React.useRef(null);
    const titleAnimationBottom = React.useRef(null);
    const resumeAnimation = React.useRef(null);
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

        React.useEffect(() => {
            resumeAnimation.current = anime ({
                targets: '#resumePDF',
                opacity: [0, 1],
                scale: [0, 1],
                // elasticity: 200,
                easing: 'linear',
                autoplay: false,
                // opacity: 0.7,
                duration: 1000,
                // loop: true
             }); 
        }, [])


    const scrollPercent = () => {

        const bodyST = document.body.scrollTop;
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;
        const docCH = document.documentElement.clientHeight;
        
        
        return (docST + bodyST) / (docSH - docCH) * 100

    }

    //This method sourced from https://stackoverflow.com/a/60455358
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
            // console.log("TOUCHING!!!");
            return true;
        }
    }
    /**
     * Add a scroll listener on the window object to
     * control animations based on scroll percentage.
     */
    window.onscroll = () => {
        var modalScale = dummyModal.style.transform;
        var modalScaleX = modalScale.substring(modalScale.indexOf('(') + 1, modalScale.indexOf(')'));
        console.log(modalScaleX);
        
        // Gotta do this to prevent that weird shadow DOM covering existing elements thing wtf
        if (resumeDoc.style.transform.includes('scale(0)')) {
            resumeDoc.style.display = 'none';
        } else {
            resumeDoc.style.display = 'flex';
        }
        
        var seekPercent = ((scrollPercent() / 100) * resumeAnimation.current.duration) - resumeAnimation.current.duration*.6;
        // console.log(seekPercent);
        if (seekPercent >= 120 && canPlay) {
                // Must re-reverse after first play because reverse() reverses the animation's entire state permanently until reversed once again
                if (firstPlay != 0) {
                    resumeAnimation.current.reverse();
                } 
                resumeAnimation.current.play();
                firstPlay = 1;
                canPlay = false;
            
        } else if (seekPercent < 120 && !canPlay) {
       
                resumeAnimation.current.reverse();
                resumeAnimation.current.play();
                canPlay = true;
            
        }
        //When modal is too large fade away contents
        if (modalScaleX > 3) {
            modalContents.style.display = 'none'
        } else {
            modalContents.style.display = 'block'
        }

        // Scroll controlled animation of resume download modal
        if (touches(resumeDiv, navbarDiv)  && getPercentOfView(resumeDiv) >= 85) {
            animationRef.current.seek(((scrollPercent() / 100) * animationRef.current.duration) - animationRef.current.duration*.6);
            titleAnimation.current.seek(((scrollPercent() / 100) * titleAnimation.current.duration) - titleAnimation.current.duration*.6);
            titleAnimationBottom.current.seek(((scrollPercent() / 100) * titleAnimationBottom.current.duration) + titleAnimationBottom.current.duration/4);

        } else if (touches(resumeDiv, navbarDiv) && getPercentOfView(resumeDiv) < 100) {
            animationRef.current.seek((getPercentOfView(resumeDiv) / 100) * animationRef.current.duration)

        } else if (!touches(resumeDiv, navbarDiv)) {
            animationRef.current.seek(0)
        }
    };

        const DummyModalStyle = {
            // width: '350px',
            // height: '350px',
            width: '18%',
            height: '33%',
            backgroundColor: 'var(--bs-resumeSwoop)',
            // border: '2px solid var(--bs-primaryColor)',
            position: 'absolute',  
            // zIndex: 1000,
            textAlign: 'center',
            // borderRadius: '50%',
        };
        const ContainerStyle = {
            backgroundColor:"#000000", 
            width: "100vw", 
            height: "500vh",
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
        const pdfContainerStyle = {
            backgroundColor: 'black',
            width: '50%',
            height: '60%',
            position: 'absolute',
            paddingBottom: 0,
        }
        const resumePDFStyle = {
            width: '100%',
            height: '99%'
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
                                {/* MODAL */}
                                <div id="dummyModal"className="dummy" style={DummyModalStyle}>
                                    <div id="modalContents">
                                    <h3 className="downloadMyResume">File Type</h3>
                                    <Row>
                                        <Col xl={{span: 12}}>
                                        <div>
                                            <img src={word} style={{height: '50%', width: '50%'}}></img>
                                        </div>
                                        </Col>
                                        <Col xl={{span: 12}}>
                                        <div>
                                            <img src={pdf} style={{height: '50%', width: '50%'}}></img>
                                        </div>
                                        </Col>
                                    </Row>
                                    <button type="download" className="btn btn-primary DLButton">Download</button>
                                    <p>Scroll to view</p>
                                    </div>
                                </div>
                                {/* RESUME IFRAME */}
                                <div id="resumePDF" style={pdfContainerStyle}>
                                    <embed  src={resumePDF}  style={resumePDFStyle}/> 
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