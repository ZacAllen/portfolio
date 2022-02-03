import React, {Component} from "react";
import { Row, Col, Divider, Carousel, Image } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anime, { anime } from 'react-anime';
import Waypoint from '../node_modules/waypoints/lib/noframework.waypoints.min.js';
import me1 from './assets/img/me1.png';
import me2 from './assets/img/me2.png';
import me3 from './assets/img/me3.png';
import me4 from './assets/img/me4.png';
import me5 from './assets/img/me5.png';



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
        const contentStyleMobile = {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundClip: 'padding-box',
            textAlign:'center',
            width: '100%',
            // height: '75vh',
            border: '5vh solid rgba(0, 0, 0, .8)',
            // display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            position: 'relative',
            filter: 'var(--bs-grayscale)'
        };

        const dividerStyle = {
            borderTop: '1px solid #000000'
        }

        const dotPosition = 'right';

        

        return (
            <div className='LandingComponent'>
                <Row gutter={[40, 16]}>
                    <Col xl={{span: 16, offset: 4}} xs={0}>
                        <div id="landingTitleWrapper">
                            <h3 className="text-center" id="title">Hey, I'm Zach Allen!</h3>
                                {/* <Divider style={dividerStyle}></Divider> */}
                            <div id ="aboutParagraph" className="text-center">
                                <p className="aboutTitle">I'm a developer based in Atlanta.
                                My experience is in UI/UX design and front-end software development with a background in programming, visual design, and user research.</p>
                                <p className="freeTime">In my spare time, I enjoy gaming, studying history, taekwondo, and fencing.</p>    
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span: 20, offset: 2}} xl ={0} xs={0}>
                    <div id="landingTitleWrapper">
                            <h3 className="text-center" id="title">Hey, I'm Zach Allen!</h3>
                                {/* <Divider style={dividerStyle}></Divider> */}
                            <div id ="aboutParagraph" className="text-center">
                                <p className="aboutTitle">I'm a developer based in Atlanta
                                My experience is in UI/UX design and front-end software development with a background in programming, visual design, and user research.</p>
                                <p className="freeTime">In my spare time, I enjoy gaming, studying history, taekwondo, and fencing.</p>    
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[40, 16]}>
                    <Col xl={{span: 7, offset: 1}} xs={0}>
                        <Anime opacity={[0, 1]} translateY={[800, 0]} delay={2800} duration={1000} easing={'linear'}>
                            <div id="aboutContent">
                                
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText"><span className="skillsText">Languages</span> - Java, JavaScript, jQuery, HTML/CSS, C, C#, Java Processing + p5.js</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText"><span className="skillsText">Tools</span> - Git, WordPress, Bootstrap, Firebase, React, Node.js</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText"><span className="skillsText">Multimedia</span> - Adobe Photoshop, Illustrator, XD, GIMP, Figma, Premiere Pro, VEGAS Pro, Tableau</h3>
                                <Divider style={dividerStyle}></Divider>
                                <h3 className="aboutText"><span className="skillsText">Skills</span> - Information Design & Visualization, Interaction Design, Graphic Design </h3>
                                <Divider style={dividerStyle}></Divider>
                            </div>
                        </Anime>
                    </Col>
                    <Col xl={{span: 15, offset: -1}} style={{paddingRight: 0}} xs={0}>
                        <Anime opacity={[0,1]} translateX={[500, 0]} delay={2800} duration={700} easing={'linear'}>
                            <Carousel dotPosition={dotPosition} autoplay style={contentStyle} id="gallery">
                                    <Image  src={me3} preview={false} width={'85%'}></Image>
                                    
                                    <Image src={me1} preview={false} width={'85%'}></Image>
                
                                    <Image  src={me2} preview={false} width={'85%'}></Image>

                                    <Image  src={me4} preview={false} width={'85%'}></Image>

                                    <Image src={me5} preview={false} width={'85%'}></Image>
                            </Carousel>
                        </Anime>
                    </Col> 
                </Row>


                 {/* --------------------------------------------------------------------------------MOBILE------------------------------------------------------------------- */}
                 <Row style={{width: '100vw'}}>
                    <Col xl={0} style={{paddingRight: 0, paddingBottom: '36px'}} xs={{span: 22, offset: 1}}>
                        <Anime opacity={[0,1]} translateX={[500, 0]} delay={2800} duration={700} easing={'linear'}>
                            <Carousel dotPosition={dotPosition} autoplay style={contentStyleMobile} id="gallery">
                                    <Image  src={me3} preview={false} width={'100%'}></Image>
                                    
                                    <Image src={me1} preview={false} width={'100%'}></Image>
                
                                    <Image  src={me2} preview={false} width={'100%'}></Image>

                                    <Image  src={me4} preview={false} width={'100%'}></Image>

                                    <Image src={me5} preview={false} width={'85%'}></Image>
                            </Carousel>
                        </Anime>
                    </Col> 
                 </Row>
                 <Row style={{width: '100vw'}}> {/*Not sure why specified width needed but it works for now */}
                    <Col xl={0} xs={{span: 22, offset: 1}}>
                            <Anime translateY={[-325, 0]} delay={2600} duration={600} easing={'linear'}>
                                <h3 className="typewriter" id="title">Hey, I'm Zach Allen!</h3>
                                <Divider style={dividerStyle}></Divider>
                            </Anime>
                            
                            <Anime opacity={[0, 1]} translateY={[800, 0]} delay={2800} duration={1000} easing={'linear'}>
                                <div id="aboutContent">
                                    <div id ="aboutParagraph">
                                        <p className="skillsText">I'm a developer based in Atlanta, GA and a recent graduate from Georgia Tech.</p>
                                        <p>I completed my Bachelor's in Computational 
                                            Media with concentrations in Interaction Design & Experimental Media.</p>
                                        <p>My experience is in UI/UX design and front-end software development with a background in programming, visual design, and user research.</p>
                                        <p>In my free time, I enjoy gaming, studying history, taekwondo, and fencing.</p>    
                                    </div>
                                    <Divider style={dividerStyle}></Divider>
                                    <h3 className="aboutText"><span className="skillsText">Languages</span> - Java, JavaScript, jQuery, HTML/CSS, C, C#, Java Processing + p5.js</h3>
                                    <Divider style={dividerStyle}></Divider>
                                    <h3 className="aboutText"><span className="skillsText">Tools</span> - Git, WordPress, Bootstrap, Firebase, React, Node.js</h3>
                                    <Divider style={dividerStyle}></Divider>
                                    <h3 className="aboutText"><span className="skillsText">Multimedia</span> - Adobe Photoshop, Illustrator, XD, GIMP, Figma, Premiere Pro, VEGAS Pro, Tableau</h3>
                                    <Divider style={dividerStyle}></Divider>
                                    <h3 className="aboutText"><span className="skillsText">Skills</span> - Information Design & Visualization, Interaction Design, Graphic Design </h3>
                                    <Divider style={dividerStyle}></Divider>
                                </div>
                            </Anime>
                    </Col>
                 </Row>
                 
                
                
            </div>
        )
    }
}

export default Landing;