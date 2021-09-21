import React, {Component} from "react";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Divider, Carousel, Image } from 'antd';
import { Parallax } from 'react-scroll-parallax';
import bg from './assets/img/bg.jpg';
import flag from './assets/img/flag.JPG'
import phone from './assets/img/phone.JPG'


class Portfolio extends Component {
    render() {
        return (
      <div>
          <div className="">
          </div>
          {/* <div className="PortfolioGallery"> */}
           <Row gutter={[40, 16]}>
               <Col xl={{span: 13, offset: 1}}>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Buffalo-Gro</div>
                                        <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={bg} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Flags of Europe</div>
                                        <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={flag} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">GA Voter Informer</div>
                                        <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={phone} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Portfolio Website</div>
                                        <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src="assets/img/petra.jpg" alt="..." />
                            </a>
                        </Col>
                    </Row>
               </Col>
               
               <Col className ="portfolioColumn" xl={{span: 9, }}>
                    <div className="content-section-heading PortfolioTitle">
                        <div style={{padding: '10px'}}>
                            <h3 id = "portfolio" className="text-secondary mb-0">Portfolio</h3>
                            <h1 id = "myProjects" className="mb-5">MY PROJECTS</h1>
                        </div>
                            
                    </div>
               </Col>

            </Row>      
      </div>
        )
    }
}

export default Portfolio;