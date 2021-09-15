import React, {Component, useState, useEffect, useRef} from "react";
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




function Resume (props) {
    const animationRef = React.useRef(null);
        React.useEffect(() => {
            var section = document.getElementById('resumeSection');

            animationRef.current = anime ({
                targets: '.dummy',
                // scale: 0,
                translateX: [-section.clientWidth*2, section.clientWidth],
                rotate: 1080,
                elasticity: 200,
                easing: 'linear',
                autoplay: false,
                opacity: 0.7,
                duration: 8000,
                // loop: true
             });


             
        }, [])

        /**
     * Calculate the scroll percentage position
     */

        
    const scrollPercent = () => {
        var section = document.getElementById('resumeSection');
        
        
        const bodyST = document.body.scrollTop;
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;
        const docCH = document.documentElement.clientHeight;
        
        
        return (docST + bodyST) / (docSH - docCH) * 100

    }
    
    /**
     * Add a scroll listener on the window object to
     * control animations based on scroll percentage.
     */
    window.onscroll = () => {
        // console.log(modalAnimation)
        // console.log(animationRef.current)
        animationRef.current.seek((scrollPercent() / 100) * animationRef.current.duration);
        // console.log(scrollPercent())
    };

        const DummyModalStyle = {
            width: '350px',
            height: '350px',
            // backgroundColor: 'var(--bs-primary)',
            border: '2px solid var(--bs-primary)',
            position: 'relative',  
            
        };
        const ContainerStyle = {
            backgroundColor:"#000000", 
            width: "100vw", 
            height: "300vh",
            position: 'relative',
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            zIndex: 1000,
            // padding: '200px',
            
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
        

        return (
            <div>
                <Row  gutter={[40, 16]} style={paddingContainer}></Row>
                {/* <Parallax className="custom-class" y={[20, -20]}> */}
                <Row gutter={[40, 16]} className=" vw-100">
                    <Col xl={{span: 24}}>
                    
                        {/* <Image src={hagia}></Image> */}
                        <div id="resume" className="resumeContainer" style={ContainerStyle}>
                            <div id="firstSection" className="" style={firstSectionStyle}>
                               
                                <div id="dummyModal"className="dummy" style={DummyModalStyle}>
                                    <h3 style={{color: '#FFFFFF'}}>Download My Resume</h3>
                                </div>
                        
                               
                            </div>
                            
                        </div>
                    
                    </Col>
                    
                </Row>
                {/* </Parallax> */}
            </div>
        )
    
}

const methods = {
    componentDidMount(props) {
      console.log('I mounted! Here are my props: ', props);

      /**
     * Define the square animation
     */
    //  const divAnimation = anime ({
    //     targets: '.dummy',
    //     scale: 0,
    //     translateX: [0, 300, -600, 0],
    //     elasticity: 200,
    //     easing: 'easeInOutCubic',
    //     autoplay: 'false',
    //     opacity: 0.7,
    //     duration: 8000,
    //     loop: 'true'
    //  }
    // );

    
    }
};

export default lifecycle(methods)(Resume);