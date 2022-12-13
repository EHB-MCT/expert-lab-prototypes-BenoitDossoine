import {useRef, useState, useEffect, useLayoutEffect} from 'react';
import * as THREE from 'three';


import {useLoader,useThree} from '@react-three/fiber';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { globalService } from '../services/GlobalService';
gsap.registerPlugin(ScrollTrigger);


function PositionalAudio(props:any){
    const audio = useRef() as any;
    const {camera} = useThree();
    const [listener] = useState(()=>new THREE.AudioListener());
    const buffer = useLoader(THREE.AudioLoader,props.url);

    useEffect(():any=>{
        if(audio.current){
            audio.current.setBuffer(buffer);
            audio.current.setRefDistance(0.1);
            audio.current.setLoop(true);
            if(props.playChoice && props.playing){
                audio.current.play();
            }

            audio.current.panner.coneInnerAngle = 180;
            audio.current.panner.coneOuterAngle = 230;
            audio.current.panner.coneOuterGain = 0;
            camera.add(listener);
        }
        return () => {
            camera.remove(listener);
        }
    },[]);

    useLayoutEffect(()=>{
        return ()=>{
            if(audio.current){
                audio.current.stop();
            }
        }
    },[])

    return <positionalAudio ref={audio} args={[listener]} />
}

export default PositionalAudio;