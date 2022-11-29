import {useRef, useLayoutEffect} from 'react';

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
        gsap.to(groupRef.current.position,{
            scrollTrigger:{
                trigger:".section4",
                start: "top center",
                end: "bottom bottom",
                scrub: 1,
                // markers:true,
            },
            x:-40,
            duration: 10
        })
                
    },[props.projects])



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