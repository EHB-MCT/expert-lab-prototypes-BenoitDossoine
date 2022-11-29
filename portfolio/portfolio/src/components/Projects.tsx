import {useRef, useLayoutEffect, useState, useEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectTile from './ProjectTile';
import {globalService} from '../services/GlobalService';

gsap.registerPlugin(ScrollTrigger);


function Projects(props:any){
    const groupRef = useRef() as any;
    const [groupPosition,setGroupPosition] = useState(globalService.helixPosition);
    const [groupRotation,setGroupRotation] = useState(globalService.helixRotation);
    useLayoutEffect(()=>{
        gsap.to(groupRef.current.position,{
            scrollTrigger:{
                trigger:".landingpage",
                start: "75% center",
                end: "bottom bottom",
                scrub: 1,
                // markers:true,
            },
            y:0,
        })
        gsap.timeline( {
            scrollTrigger:{
                trigger:".section3",
                start: "top center",
                end:"80% center",
                scrub: 1,
                // markers:true,
            }
        })
        .to(groupRef.current.rotation,{
            y:-1*(props.projects.length-1)*Math.PI/3,
        })
        .to(groupRef.current.position,{
            y:props.projects.length-1,
        },"<")
        gsap.timeline({
            scrollTrigger:{
                trigger:".section4",
                start: "top center",
                end:"bottom bottom",
                scrub: 1,
                markers:true,
            }
        })
        .to(groupRef.current.position,{
            y:100,
        })      
    },[props.projects])

    const leavePage = () => {
        globalService.helixPosition = groupRef.current.position;
        globalService.helixRotation = groupRef.current.rotation;
    }
    
    return(
        <group ref={groupRef} position={[groupPosition.x,groupPosition.y,groupPosition.x]} rotation={[groupRotation.x,groupRotation.y,groupRotation.x]}>
            {props.projects.map(
                (project:any,index:any)=>{
                    return(
                        <ProjectTile key={index} index={index} project={project} clickHandler={leavePage}/>
                    );
                }
            )}
        </group>
                    
    )
}

export default Projects;