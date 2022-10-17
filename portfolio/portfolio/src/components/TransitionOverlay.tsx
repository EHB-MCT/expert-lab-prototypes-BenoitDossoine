import {motion} from 'framer-motion';

function TransitionOverlay(props:any){

    return(
        <div className="overlayContainer">
            <motion.div 
                    initial={{x:'0vw',y:'0vh'}}
                    animate={{x:'0vw',y:'-100vh'}}
                    transition={{delay:0.5}}
                    className="overlay entry">
                        <motion.p 
                            className="overlayText"
                            initial={{opacity:1}}
                            exit={{opacity:0}}
                        >
                            {props.text}
                        </motion.p>
            </motion.div>
            <motion.div
                initial={{x:'-100vw'}}
                exit={{x:'0vw'}}
                className="exit overlay">
            </motion.div>
        </div>
    )

}

export default TransitionOverlay;