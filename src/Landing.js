import React, {Component} from "react";
import { Row, Col, Divider, Carousel } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import anime from '../node_modules/animejs/lib/anime.min.js';
import Waypoint from '../node_modules/waypoints/lib/noframework.waypoints.min.js';
class Landing extends Component {   

    render() {
        const contentStyle = {
        
        };

        const dividerStyle = {
            borderTop: '2px solid #000000'
        }

        const dotPosition = 'right';

        return (
            <div className='LandingComponent'>
                <Row gutter={[40, 16]}>
                    <Col xl={{span: 7, offset: 1}}>
                        <h3 className="typewriter">Hey, I'm Zach Allen!</h3>
                        <Divider style={dividerStyle}></Divider>
                        <h3 className="aboutText">Recent Georgia Tech Grad - Computational Media</h3>
                        <Divider style={dividerStyle}></Divider>
                        <h3 className="aboutText">Concentrations - Interactive Design & Experimental Media</h3>
                        <Divider style={dividerStyle}></Divider>
                        <h3 className="aboutText">Languages - </h3>
                        <Divider style={dividerStyle}></Divider>
                        <h3 className="aboutText">Tools - </h3>
                        <Divider style={dividerStyle}></Divider>
                        <h3 className="aboutText">Skills - </h3>
                    </Col>
                    <Col xl={{span: 15, offset: -1}}>
                        <Carousel dotPosition={dotPosition}>
                            <div>
                                <img style={contentStyle} src=""></img>
                            </div>
                            <div>
                                <img style={contentStyle}></img>
                            </div>
                            <div>
                                <img style={contentStyle}></img>
                            </div>
                            <div>
                                <img style={contentStyle}></img>
                            </div>
                        </Carousel>
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