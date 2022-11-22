import {useFrame, useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import {useRef, useLayoutEffect, useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from '../assets/timer.jpg';

gsap.registerPlugin(ScrollTrigger);


function Projects(props:any){
    const texture = useLoader(THREE.TextureLoader,img);
    const groupRef = useRef() as any;
    const timeline = useRef() as any;
    useLayoutEffect(()=>{
        gsap.to(groupRef.current.position,{
            scrollTrigger:{
                trigger:".section2",
                start: "60% center",
                end: "bottom bottom",
                scrub: 3,
                toggleActions: "none none none reset",
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
                toggleActions: "none none none reset",
                markers:true,
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
                markers:true,
            },
            x:-40,
            duration: 10
        })
                
    },[])

    const paneClickHandler = () => {
        console.log("clicked!");
    }

    const paneHoverHandler = (event:any) => {
        console.log(event.object);
    }
    
    return(
        <group ref={groupRef} position={[0,-100,0]}>
            {props.projects.map((project:any,index:any)=>{
                return(
                    <group
                        key={index}
                        rotation={[0,index*Math.PI/3,0]}
                        position={[3*Math.sin(index*Math.PI/3),-index,3*Math.cos(index*Math.PI/3)]}
                    >   
                        {/* <ProjectParticles/> */}
                        <mesh 
                            scale={[1.5,1.5,1]}
                            onClick={paneClickHandler}
                            onPointerOver={paneHoverHandler}
                        >
                            <planeGeometry></planeGeometry>
                            <meshBasicMaterial
                                attach="material"
                                map={texture}
                                side={THREE.DoubleSide}
                            />
                        </mesh>
                    </group>
                    )
                })
            }
        </group>
                    
    )
}

export default Projects;