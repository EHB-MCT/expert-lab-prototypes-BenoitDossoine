import {useRef, useLayoutEffect, useState, useEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectTile from './ProjectTile';
import {globalService} from '../services/GlobalService';
import * as THREE from 'three';
import { Text3D } from '@react-three/drei';


gsap.registerPlugin(ScrollTrigger);


function Projects(props:any){
    const groupRef = useRef() as any;
    const [groupPosition,setGroupPosition] = useState(globalService.helixPosition);
    const [groupRotation,setGroupRotation] = useState(globalService.helixRotation);

    const tilesToTop = () =>{
        groupRef.current.position.y = 0;
        groupRef.current.traverse((child:any) =>{
            if (child instanceof THREE.Mesh) {
                child.material.opacity = 1;
            }
        })
    }
    
    const tilesToBottom = () => {
        groupRef.current.traverse((child:any) =>{
            if (child instanceof THREE.Mesh) {
                child.material.opacity = 0;
            }
        })
        console.log('naar beneden');
        groupRef.current.position.y = -100;
    }

    useLayoutEffect(()=>{
        ScrollTrigger.create({
            id:"landingpage",
            trigger:".landingpage",
            start: "60% center",
            end: "bottom 60%",
            onEnter: tilesToTop,
            onLeaveBack: tilesToBottom,
        })
        
        gsap.timeline( {
            scrollTrigger:{
                id:"projects",
                trigger:".projects",
                start: "top center",
                end:"80% center",
                scrub: 2,
            }
        })
        .to(groupRef.current.rotation,{
            y:-1*(props.projects).length*Math.PI/3,
        })
        .to(groupRef.current.position,{
            y:(props.projects).length-0.5,
        },"<")
        gsap.timeline({
            scrollTrigger:{
                id:"contact",
                trigger:".contact",
                start: "top 75%",
                scrub: 1,
            }
        })
        .to(groupRef.current.position,{
            y:100,
        })

        return() =>{
            // groupRef.current.kill();
            ScrollTrigger.getById("landingpage")?.kill();
            ScrollTrigger.getById("projects")?.kill();
            ScrollTrigger.getById("contact")?.kill();
        }
        
    },[props.projects])

    const leavePage = () => {
        globalService.helixPosition = groupRef.current.position;
        globalService.helixRotation = groupRef.current.rotation;

        globalService.audioStatus = false;
    }
    
    
    return(
        <>
        <group ref={groupRef} position={[groupPosition.x,groupPosition.y,groupPosition.z]} rotation={[groupRotation.x,groupRotation.y,groupRotation.z]}>
            {props.projects
            .sort((a:any,b:any)=>a.attributes.order-b.attributes.order)
            .map(
                (project:any,index:any)=>{
                    return(
                        <ProjectTile key={index} index={index} project={project} clickHandler={leavePage}/>
                    );
                }
            )}
        </group>
    </>
    )
}

export default Projects;