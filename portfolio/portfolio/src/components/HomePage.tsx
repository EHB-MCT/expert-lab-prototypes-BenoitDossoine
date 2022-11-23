import {useRef, useLayoutEffect,useEffect,useState} from 'react';

import { Stars } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Projects from './Projects';
import { projectService } from '../services/ProjectService';

gsap.registerPlugin(ScrollTrigger);

function HomePage(){
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        projectService.fetchProjects()
            .then(response=>{
                setProjects(response);
            })
    },[projects])

    const starRef = useRef() as any;
    useLayoutEffect(()=>{
        gsap.to(starRef.current,{
            scrollTrigger:{
                trigger:".landingpage",
                start: "75% center",
                end: "bottom bottom",
                scrub: true,
                toggleActions: "none none reset reset",
                markers:true,
            },
            visible:true,
            duration: 1
        })
    },[])
    return(
        <>
            <Canvas style={{
                width: "100vw",
                height: "100vh",
                zIndex: 50,
                position: "fixed"
            }}>
                <group ref={starRef} visible={false}>
                    <Stars radius={100} depth={50} count={5000} factor={10} saturation={1} fade speed={1.5}></Stars>
                </group>
                <Projects projects={projects}></Projects>
            </Canvas>
            <div className="homepage landingpage">
                <h1>Time to unlock your imagination</h1>
            </div>
            <div className="homepage section3">
                {/* <p>Time to unlock your imagination!</p> */}
            </div>
            <div className="homepage section4">
                {/* <p>Time to unlock your imagination!</p> */}
            </div>
        </>
    )
}

export default HomePage;