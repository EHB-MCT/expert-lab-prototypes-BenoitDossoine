import {Canvas} from '@react-three/fiber';
import Projects from './Projects';

function HomePage(){
    const projects = [
        {
            id:0,
            name: "Project 1"
        },
        {
            id:1,
            name: "Project 1"
        },
        {
            id:2,
            name: "Project 1"
        },
        {
            id:3,
            name: "Project 1"
        },
        {
            id:3,
            name: "Project 1"
        },
        {
            id:3,
            name: "Project 1"
        },
    ]    

    return(
        <>
            <Canvas style={{
                width: "100vw",
                height: "100vh",
                zIndex: 50,
                position: "fixed"
            }}>
                <Projects projects={projects}></Projects>
            </Canvas>
            <div className="homepage section2">
                <p>Time to unlock your imagination!</p>
            </div>
            <div className="homepage section3">
                <p>Time to unlock your imagination!</p>
            </div>
            <div className="homepage section4">
                <p>Time to unlock your imagination!</p>
            </div>
        </>
    )
}

export default HomePage;