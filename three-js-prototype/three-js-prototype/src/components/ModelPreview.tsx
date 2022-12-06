import {Canvas,useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {Loader, OrbitControls} from '@react-three/drei';
import {useState, Suspense} from 'react';

function ModelPreview(props:any){
    const [loaded,setLoaded] = useState(false);
    const model = useLoader(GLTFLoader,`./models/${props.model}`); 
     
    return(
        <div className="canvasContainer">
            <Canvas
            
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ - 4, 3, 6 ]
            }}>
                <Suspense fallback={null}>
                    <OrbitControls makeDefault/>
                    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
                    <ambientLight intensity={ 0.5 } />
                    
                    <primitive
                        object={model.scene}
                        onClick={(event:any)=>{
                            event.stopPropagation();
                            event.object.material.color.set('red');
                        }}
                        />
                </Suspense>
            </Canvas>
            <Loader/>
        </div>
    )
}

export default ModelPreview;