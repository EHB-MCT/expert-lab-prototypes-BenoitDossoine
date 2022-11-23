import {useRef, useLayoutEffect} from 'react';

import { Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectTile from './ProjectTile';


gsap.registerPlugin(ScrollTrigger);


function Projects(props:any){
    
    const groupRef = useRef() as any;
    useLayoutEffect(()=>{
        gsap.to(groupRef.current.position,{
            scrollTrigger:{
                trigger:".landingpage",
                start: "75% center",
                end: "bottom bottom",
                scrub: 3,
                toggleActions: "none none reset reset",
                markers:true,
            },
            y:0,
            duration: 1
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:".section3",
                start: "top center",
                end:"80% center",
                scrub: 3,
                // toggleActions: "none none none reset",
                // markers:true,
            }
        })
        .to(groupRef.current.rotation,{
            y:-1*(props.projects.length-1)*Math.PI/3,
            duration: 10
        })
        .to(groupRef.current.position,{
            y:props.projects.length-1,
            duration:10
        },"<")
        gsap.to(groupRef.current.position,{
            scrollTrigger:{
                trigger:".section4",
                start: "top center",
                end: "bottom bottom",
                scrub: 3,
                toggleActions: "none none none reset",
                // markers:true,
            },
            x:-40,
            duration: 10
        })
                
    },[])



    return(
        <group ref={groupRef} position={[0,-100,0]}>
            {props.projects.map(
                (project:any,index:any)=>{
                    return(
                        <ProjectTile key={index} index={index} project={project}/>
                    );
                }
            )}
        </group>
                    
    )
}

export default Projects;