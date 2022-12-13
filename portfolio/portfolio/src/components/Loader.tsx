import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }
function Loader(){

    return(
        
        <div className="loader">
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 399.71796">
                <g id="Layer_1-2" data-name="Layer 1">
                    <motion.path
                    fill="red"
                    initial={{pathLength:0}}
                    animate={{pathLength:1}}
                    transition={transition}
                    d="M119,4c29.25061,0,56.75037,11.39078,77.43365,32.07407s32.07404,48.18307,32.07404,77.43365c0,36.27304-17.92786,70.13522-47.95715,90.58139l-2.39185,1.62854,.79828,2.78131,53.73352,187.21899H5.34045L60.00806,209.17148l.82739-2.82343-2.44885-1.6308c-30.61609-20.38818-48.89429-54.4852-48.89429-91.20953,0-29.25058,11.39075-56.75037,32.07404-77.43365S89.74939,4,119,4m0-4C56.3114,0,5.49231,50.81912,5.49231,113.50772c0,39.45175,20.13098,74.19724,50.67719,94.53888L0,399.71796H238l-55.19824-192.32248c30.00165-20.42734,49.70593-54.85504,49.70593-93.88776C232.50769,50.81912,181.6886,0,119,0h0Z"/>
                </g>
            </svg>
        </div>
    )
    
}

export default Loader;