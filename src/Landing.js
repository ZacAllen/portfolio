import React, {Component} from "react";
import { Row, Col, Divider, Carousel, Image } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anime, { anime } from 'react-anime';
import Waypoint from '../node_modules/waypoints/lib/noframework.waypoints.min.js';
import petra from './petra.jpg';
import himeji from './himeji.jpg';
import fasil from './fasil.jpg';
import hagia from './hagia.jpg'

class Landing extends Component {   

    render() {
        const contentStyle = {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundClip: 'padding-box',
            textAlign:'center',
            width: '100%',
            // height: '75vh',
            border: '15vh solid rgba(0, 0, 0, .8)',
            // display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            position: 'relative'
        };
        const imgStyle = {
            width: 'inherit',
            height: 'auto',
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
                    <Col xl={{span: 15, offset: -1}}>
                        <Anime opacity={[0,1]} translateX={[500, 0]} delay={2800} duration={500} easing={'linear'}>
                            <Carousel dotPosition={dotPosition} autoplay style={contentStyle} id="gallery">
                                    
                                    <Image src={petra} style={imgStyle}></Image>
                
                                    <Image src={himeji} style={imgStyle}></Image>
                            
                                    <Image src={fasil} style={imgStyle}></Image>
                        
                                    <Image src={hagia} style={imgStyle}></Image>
                            
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