import React, {Component} from "react";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Divider, Carousel, Image } from 'antd';
import { Parallax } from 'react-scroll-parallax';
import bg from './assets/img/bg.jpg';
import flag from './assets/img/flag.JPG'
import phone from './assets/img/phone.JPG'
import numberle from './assets/img/numberle.JPG'
import portsnip from './assets/img/portsnip.JPG'
import sveltedex from './assets/img/sveltedex.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import 'pattern.css/dist/pattern.css'

class Portfolio extends Component {
    render() {
        return (
      <div>
           <Row gutter={[40, 16]}>
                <Col xl={{span: 13, offset: 1}} xs ={0}>
                <ScrollAnimation animateIn="fadeInUp" animatePreScroll={false}>
                        <Row style={{marginBottom: '5%'}}>
                            <Col xl={{span: 23}}>
                                <a className="portfolio-item" href="https:sveltedex.web.app" target="_blank" >
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2 portfolioText">Sveltedex</div>
                                            <p className="mb-0">A Pokemon encyclopedia modeled after the in-game Pokedex tool; created with Svelte as frontend framework and hosted with Firebase.</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid portfolioImage" src={sveltedex} alt="..." />
                                </a>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '5%'}}>
                            <Col xl={{span: 23}}>
                                <a className="portfolio-item" href="https://numberle.netlify.app/" target="_blank" >
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2 portfolioText">Numberle</div>
                                            <p className="mb-0">A Wordle parody game made in React.</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid portfolioImage" src={numberle} alt="..." />
                                </a>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '5%'}}>
                            <Col xl={{span: 23}}>
                                <a className="portfolio-item" href="https://github.com/ZacAllen/flags-of-europe" target="_blank" >
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2 portfolioText">Flags of Europe</div>
                                            <p className="mb-0">An interactive flag map showcasing the evolution of Europe’s national flag designs from 1815 to 2021. Made with HTML5, CSS, 
                                            JavaScript/jQuery + additional JS libraries.</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid portfolioImage" src={flag} alt="..." />
                                </a>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '5%'}}>
                            <Col xl={{span: 23}}>
                                <a className="portfolio-item" href="https://zakadamia.itch.io/buffalogro" target="_blank">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2 portfolioText">Buffalo-Gro</div>
                                            <p className="mb-0">A GameBoy Advance pet-raising simulator and racing game created in C with assets partially drawn in Usenti.</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid portfolioImage" src={bg} alt="..."/>
                                </a>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '5%'}}>
                            <Col xl={{span: 23}}>
                                <a className="portfolio-item" href="https://zachallen.myportfolio.com/voter-informer" target="_blank">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2 portfolioText">GA Voter Informer</div>
                                            <p className="mb-0">An interactive mobile app prototype meant to motivate people to take action and rebuild communities through 
                                            the voting process</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid portfolioImage" src={phone} alt="..." />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={{span: 23}}>
                                <a className="portfolio-item" href="https://github.com/ZacAllen/portfolio" target="_blank" >
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2 portfolioText">Portfolio Website</div>
                                            <p className="mb-0">This website, made from scratch with ReactJS and hosted with Netlify.</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid portfolioImage" src={portsnip} alt="..." />
                                </a>
                            </Col>
                        </Row>
                        </ScrollAnimation>
                </Col>
              
                
                    <Col className ="portfolioColumn" xl={{span: 9, }} xs={0}>
                        
                            <div className="content-section-heading PortfolioTitle ">
                                <div style={{padding: '10px'}}>
                                    <h3 id = "portfolio" className="text-secondary mb-0">Portfolio</h3>
                                    <h1 id = "myProjects" className="mb-5">MY PROJECTS</h1>
                                </div>
                                    
                            </div>
                      
                    </Col>
              
            {/* --------------------------------------------------------------------------------MOBILE------------------------------------------------------------------- */}
                <Col xl={0} xs ={{span: 22, offset: 1}}>
                    <Row>
                        <Col>
                            <div className="content-section-heading PortfolioTitle">
                                <div>
                                    <h3 id = "portfolio" className="text-secondary mb-0">Portfolio</h3>
                                    <h1 id = "myProjects" className="mb-5">MY PROJECTS</h1>
                                </div>           
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="portfolio-item" href="https://sveltedex.web.app" target="_blank" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Sveltedex</div>
                                        <p className="mb-0 captionMobile">A Pokemon encyclopedia modeled after the in-game Pokedex tool; created with Svelte as frontend framework and hosted with Firebase.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={sveltedex} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="portfolio-item" href="https://numberle.netlify.app/" target="_blank" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Numberle</div>
                                        <p className="mb-0 captionMobile">A Wordle parody game made in React.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={numberle} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="portfolio-item" href="https://github.com/ZacAllen/flags-of-europe" target="_blank" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Flags of Europe</div>
                                        <p className="mb-0 captionMobile">An interactive flag map showcasing the evolution of Europe’s national flag designs from 1815 to 2021. Made with HTML5, CSS, 
                                        JavaScript/jQuery + additional JS libraries.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={flag} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="portfolio-item" href="https://zakadamia.itch.io/buffalogro" target="_blank">
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Buffalo-Gro</div>
                                        <p className="mb-0 captionMobile">A GameBoy Advance pet-raising simulator and racing game created in C with assets partially drawn in Usenti.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={bg} alt="..."/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="portfolio-item" href="https://zachallen.myportfolio.com/voter-informer" target="_blank">
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">GA Voter Informer</div>
                                        <p className="mb-0 captionMobile">An interactive mobile app prototype meant to motivate people to take action and rebuild communities through 
                                        the voting process</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={phone} alt="..." />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a className="portfolio-item" href="https://github.com/ZacAllen/portfolio" target="_blank" >
                                <div className="caption">
                                    <div className="caption-content">
                                        <div className="h2 portfolioText">Portfolio Website</div>
                                        <p className="mb-0 captionMobile">This website, made from scratch with ReactJS and hosted with Netlify.</p>
                                    </div>
                                </div>
                                <img className="img-fluid portfolioImage" src={portsnip} alt="..." />
                            </a>
                        </Col>
                    </Row>
                </Col>

            </Row>  
                
      </div>
        )
    }
}

export default Portfolio;