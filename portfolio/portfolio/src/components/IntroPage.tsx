import {Canvas} from '@react-three/fiber';
import { useAnimation} from 'framer-motion';
import { useEffect } from 'react';

function IntroPage(){
    return(
        <div className="intropage">
            <div className="intropageTextContainer">
                <h1>Welcome!</h1>
                <p>My name is Benoît,</p>
                <p>and I'll be your guide</p>
                <p>through my own universe...</p>
            </div>
            <Canvas>
                
            </Canvas>
        </div>
    )
}

export default IntroPage;