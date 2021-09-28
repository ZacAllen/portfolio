
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import bw1 from './bw1.png';
import bw1 from './assets/img/wall1.jpg'
import bw2 from './assets/img/wall6.jpg'
import bw3 from './assets/img/wall7.jpg'
import bw4 from './assets/img/wall8.jpg'
import bw5 from './assets/img/wall9.jpg'
import bw6 from './assets/img/wall10.jpg'
import bw7 from './assets/img/wall11.jpg'

function Backgrounds(props) {

    const ContainerStyle = {
        position: 'absolute'
    }

    return (
        <div style={ContainerStyle}>
            <div id="bgImage1" style={{
                        backgroundImage: 'url('+bw1+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>
            <div id="bgImage2" style={{
                        backgroundImage: 'url('+bw2+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>  
            <div id="bgImage3" style={{
                        backgroundImage: 'url('+bw3+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div> 
            <div id="bgImage4" style={{
                        backgroundImage: 'url('+bw4+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>      
            <div id="bgImage5" style={{
                        backgroundImage: 'url('+bw5+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>      
            <div id="bgImage6" style={{
                        backgroundImage: 'url('+bw1+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        transform: 'scaleX(-1)',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>     
            <div id="bgImage7" style={{
                        backgroundImage: 'url('+bw3+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        transform: 'scaleX(-1)',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>  
            <div id="bgImage8" className = "secondToLastBGImage" style={{
                        backgroundImage: 'url('+bw6+')',
                        backgroundSize: "cover",
                        height: "100vh",
                        width: '100vw',
                        transform: 'scaleX(-1)',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>
            <div id="bgImage9" className = "lastBGImage" style={{
                        backgroundImage: 'url('+bw7+')',
                        backgroundSize: "cover",
                        height: "110vh",
                        width: '100vw',
                        transform: 'scaleX(-1)',
                        opacity: 'var(--bs-bgOpacityValue)',
                        filter: 'var(--bs-grayscale)'
                        }}></div>  
            {/* <div id="bgImage10" style={{
                        backgroundImage: 'url('+bw2+')',
                        backgroundSize: "cover",
                        height: "20vh",
                        width: '100vw',
                        transform: 'scaleX(-1)',
                        opacity: 0.3
                        }}></div>*/}
        </div>
    )
}

export default Backgrounds;


















