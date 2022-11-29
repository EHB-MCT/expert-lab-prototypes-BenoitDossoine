import {useRef, useLayoutEffect,useEffect,useState} from 'react';

import { Stars } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Projects from './Projects';
import { projectService } from '../services/ProjectService';

import { globalService } from '../services/GlobalService';

gsap.registerPlugin(ScrollTrigger);

function HomePage(){
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const [consent,setConsent] = useState(globalService.consent);
    useEffect(()=>{
        setLoading(true);
        projectService.fetchProjects()
            .then(response=>{
                setProjects(response);
                setLoading(false);
            })
            
    },[])

    const starRef = useRef() as any;

    return(
    <>
        {!consent?
            <div className="loadingPage">
                <p className="loadingPageText">This experience is beter with sound!</p>
                {loading?
                    <p className="loadingPageText">Loading....</p>
                :
                    <button 
                        className="loadingPageBtn"
                        onClick={()=>{
                            setConsent(true);
                            globalService.consent = true;
                            }}>
                            Enter
                    </button>
                }
            </div>
        :
        <>
            <Canvas style={{
                width: "100vw",
                height: "100vh",
                zIndex: 50,
                position: "fixed"
            }}>
                <group ref={starRef} visible={true}>
                    <Stars radius={70} depth={50} count={3000} factor={10} saturation={1} fade speed={1.5}></Stars>
                </group>
                <Projects projects={projects}></Projects>
            </Canvas>
            <div className="homepage landingpage">
                <h1>Time to unlock your imagination</h1>
            </div>
            <div className="homepage section3">
            </div>
            <div className="homepage section4">
            </div>
        </>
        }
    </>
    )
}

export default HomePage;