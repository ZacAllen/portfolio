import React, {Component} from "react";
import { Row, Col, Divider, Carousel, Image } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anime, { anime } from 'react-anime';
import Waypoint from '../node_modules/waypoints/lib/noframework.waypoints.min.js';
import me1 from './assets/img/me1.png';
import me2 from './assets/img/me2.png';
import me3 from './assets/img/me3.png';



class Landing extends Component {   
 
    render() {
        const contentStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundClip: 'padding-box',
            textAlign:'center',
            width: '100%',
            // height: '75vh',
            border: '10vh solid rgba(0, 0, 0, .8)',
            // display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            position: 'relative',
            filter: 'var(--bs-grayscale)'
        };
        const imgStyle = {
            
            
        }

        const dividerStyle = {
            borderTop: '1px solid #000000'
        }

        const dotPosition = 'right';

        

        return (
            <div className='LandingComponent'>
                <Row gutter={[40, 16]}>
                    <Col xl={{span: 7, offset: 1}}>
                        <h3 className="typewriter" id="title">Hey, I'm Zach Allen!</h3>
                        <Anime opacity={[0, 1]} translateY={[800, 0]} delay={2800} duration={1000} easing={'linear'}>
                            <div id="aboutContent">
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText">Recent Georgia Tech Grad - Computational Media</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText">Concentrations - Interactive Design & Experimental Media</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText">Languages - Java, JavaScript, jQuery, HTML/CSS, C, C#, Java Processing + p5.js</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText">Tools - Git, WordPress, Bootstrap, Firebase, React, Node.js</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText">Skills - Information Design & Visualization, Interaction Design, Graphic Design </h3>
                                <Divider style={dividerStyle}></Divider>
                            </div>
                        </Anime>
                    </Col>
                    <Col xl={{span: 15, offset: -1}} style={{paddingRight: 0}}>
                        <Anime opacity={[0,1]} translateX={[500, 0]} delay={2800} duration={700} easing={'linear'}>
                            <Carousel dotPosition={dotPosition} autoplay style={contentStyle} id="gallery">

                                    <Image  src={me3} preview={false} width={'85%'}></Image>
                                    
                                    <Image src={me1} preview={false} width={'85%'}></Image>
                
                                    <Image  src={me2} preview={false} width={'85%'}></Image>
                            
                                    
                        
    
                            
                            </Carousel>
                        </Anime>
                    </Col>
                </Row>
                {/* <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button> */}

            </div>
        )
    }
}

export default Landing;