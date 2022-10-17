import {motion} from "framer-motion";
import TransitionOverlay from "./TransitionOverlay";
function Workpage(){
    return(
        <>
            <TransitionOverlay text="Work."></TransitionOverlay>
            <div className="workpageContainer pageContainer">
                <div className="contentContainer">
                    <div className="circle"></div>
                </div>
            </div>
        </>
    )
}

export default Workpage;