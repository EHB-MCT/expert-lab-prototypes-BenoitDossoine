import {Canvas,useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from '@react-three/drei';
import {Perf} from 'r3f-perf';

function ModelPreview(){
    const model = useLoader(GLTFLoader,'./models/1666165209069-Duck.gltf')
    return(
        <>
        <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        }}>
            <OrbitControls makeDefault/>
            <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
            <ambientLight intensity={ 0.5 } />
            <primitive object={model.scene}/>
        </Canvas>
        </>
    )
}

export default ModelPreview;