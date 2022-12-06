import { Html, useProgress } from "@react-three/drei";

function Loader() {
    const {active,progress,errors,item,loaded,total} = useProgress();
    return(
        <div className="loaderContainer">
            <p>{progress}% loaded</p>
        </div>
    )
}

export default Loader;