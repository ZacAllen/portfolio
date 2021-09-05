import React, {Component} from "react";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Divider, Carousel, Image } from 'antd';



class Portfolio extends Component {
    render() {
        return (
      <div>
          <div className="">
          </div>
          {/* <div className="PortfolioGallery"> */}
           <Row gutter={[40, 16]}>
               <Col xl={{span: 15, offset: 1}}>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">Himeji Castle</div>
                                        <p className="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src="assets/img/himeji.jpg" alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">Fasilides Castle</div>
                                        <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src="assets/img/fasil.jpg" alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">Hagia Sophia</div>
                                        <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src="assets/img/hagia.jpg" alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xl={{span: 23}}>
                            <a className="portfolio-item" href="#!" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2">Petra</div>
                                        <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src="assets/img/petra.jpg" alt="..." />
                            </a>
                        </Col>
                    </Row>
               </Col>
               <Col className ="portfolioColumn" xl={{span: 7, offset: -1}}>
                    <div className="content-section-heading PortfolioTitle">
                            <h3 id = "portfolio" className="text-secondary mb-0">Portfolio</h3>
                            <h1 id = "myProjects" className="mb-5">My Projects</h1>
                    </div>
               </Col>

            </Row>      
      </div>
        )
    }
}

export default Portfolio;