import {useRef, useEffect,useState} from 'react';

import { Stars } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Projects from './Projects';
import { projectService } from '../services/ProjectService';

import { globalService } from '../services/GlobalService';
import IntroPage from './IntroPage';
import LoadingPage from './LoadingPage';

gsap.registerPlugin(ScrollTrigger);

function HomePage(){
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const [consent,setConsent] = useState(globalService.consent);
    const canvasRef = useRef() as any;

    useEffect(()=>{
        setLoading(true);
        projectService.fetchProjects()
            .then(response=>{
                setProjects(response);
                setLoading(false);
            })
    },[])

    useEffect(()=>{
        if(canvasRef.current != undefined){
            gsap.to(canvasRef.current.style,{
                scrollTrigger:{
                    trigger:".intropage",
                    start: "70% center",
                    end:"100% center",
                    scrub: 1,
                    markers:true
                },
                opacity: 1,
                duration: 3,
            })        
        }
    },[consent])

    const consentClick = () => {
        setConsent(true);
        globalService.consent = true;
    }
    
    return(
    <>
        {!consent?
            <LoadingPage loading={loading} clickHandler={consentClick}></LoadingPage>
        :
        <>  
            <div className="homepageWrapper">
                <Canvas 
                ref={canvasRef} 
                style={{
                    width: "100vw",
                    height: "100vh",
                    zIndex: 50,
                    position: "fixed",
                    top: 0,
                    // opacity: 0
                }}>
                    <group visible={true}>
                        <Stars radius={70} depth={50} count={3000} factor={10} saturation={1} fade speed={1.5}></Stars>
                    </group>
                    <Projects 
                        projects={projects}
                    ></Projects>
                </Canvas>
                <IntroPage/>
                <div className="homepage landingpage">
                    <h1>Time to unlock your imagination</h1>
                </div>
                <div className="homepage projects">
                </div>
                <div className="homepage contact">
                </div>
            </div>
        </>
        }
    </>
    )
}

export default HomePage;