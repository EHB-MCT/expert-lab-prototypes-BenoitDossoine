import {useEffect, useRef} from 'react';
import { gsap } from "gsap";
function Homepage(){
    useEffect(()=>{
       gsap.timeline()
        .to(".overlay",{right:0})
        .to(".contentContainer",{opacity:1})
        .to(".overlay",{y:"100vw"},"+=0.5");
    },[]);
    return(
        <div className="homepageContainer">
            <div className="overlay">
                <p className="overlayText">Home.</p>
            </div>
            <div className="contentContainer">
                <div className="square"></div>
            </div>
        </div>
    )
}

export default Homepage;