import {useEffect,useState} from 'react';
import {timer,interval} from 'rxjs';
import {takeUntil,tap} from 'rxjs/operators';
import {motion, useMotionValue} from "framer-motion";

function Timer(props:any){

    const [time,setTime] = useState(0);
    const [timerOn,setTimerOn] = useState(true)
    const beginPath = useMotionValue(1);
    
    useEffect(()=>{
        beginPath.set(1);
        setTimerOn(true);
        const questionTimer = interval(1000);
        const endTimer = timer(props.time*1000);
        const end = questionTimer.pipe(takeUntil(endTimer.pipe(tap(()=>setTimerOn(false)))));
        const timerFinishedSub = endTimer.subscribe(val=>props.timeUp());
        const timerSub = end.subscribe(val=>setTime(val));

        return()=>{
            timerSub.unsubscribe();
            timerFinishedSub.unsubscribe();
        }
    },[props.question])
    return(
        <div className="timerContainer">
            <svg>
                <motion.circle
                key={props.question}
                className='timerCircle'
                initial={{pathLength:beginPath.get()}}
                animate={{pathLength:0}}
                transition={{duration:props.time,ease:"linear"}}
                cx="50%" cy="50%" r="70px"
                ></motion.circle>
            </svg>
            <div className="timer">
                {timerOn?props.time - time - 1:0}
            </div>
        </div>
    )
}

export default Timer;