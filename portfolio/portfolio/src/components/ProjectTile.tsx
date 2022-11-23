import {useEffect} from 'react';
import * as THREE from 'three';
import {useLoader} from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';

function ProjectTile(props:any){
    
    const texture = useLoader(THREE.TextureLoader,`http://localhost:1337${props.project.attributes.thumbnail.data.attributes.url}`);
    const paneClickHandler = () => {
        console.log("clicked!");
    }
    return(
        <group
            rotation={[0,props.index*Math.PI/3,0]}
            position={[3*Math.sin(props.index*Math.PI/3),-props.index,3*Math.cos(props.index*Math.PI/3)]}
        >   
            {/* <ProjectParticles/> */}
            <Float
                floatIntensity={1.5}    
            >
            <mesh 
                scale={[2.6,1.5,1]}
                onClick={paneClickHandler}
                >
                <planeGeometry></planeGeometry>
                <meshBasicMaterial
                    attach="material"
                    map={texture}
                    side={THREE.DoubleSide}
                />
            </mesh>
                <Text3D
                font="./fonts/raleway_light.json"
                size={0.1}
                height={ 0.01 }
                curveSegments={ 12 }
                position={[-1.3,-0.9,0]}
                >
                    {props.project.attributes.name}
                </Text3D>
            
            </Float>
        </group>
    )
}

export default ProjectTile;