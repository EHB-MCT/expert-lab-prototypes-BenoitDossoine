import {useRef, useState, useEffect, useLayoutEffect} from 'react';
import * as THREE from 'three';

import {useLoader,useThree} from '@react-three/fiber';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function PositionalAudio(props:any){
    const audio = useRef() as any;
    const {camera} = useThree();
    const [listener] = useState(()=>new THREE.AudioListener());
    const buffer = useLoader(THREE.AudioLoader,props.url);



    useEffect(():any=>{
        if(audio.current){
            audio.current.setBuffer(buffer);
            audio.current.setRefDistance(0.01);
            audio.current.setLoop(true);
            camera.add(listener);
            return () => camera.remove(listener);
        }
    },[]);

    useLayoutEffect(()=>{
        ScrollTrigger.create({
            trigger: ".homepage",
            onEnter: ()=>{audio.current.play()}
        });
    },[])
    return <positionalAudio ref={audio} args={[listener]} />
}

export default PositionalAudio;