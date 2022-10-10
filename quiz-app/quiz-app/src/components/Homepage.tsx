import HomepageButton from "./HomepageButton"
import {useState,useEffect} from "react"
import {ArrowRight} from "react-feather"
import {useNavigate} from "react-router-dom";
import { client } from "websocket";

function Homepage(props:any){
    const [playerState,setPlayerState] = useState(true);
    const navigate = useNavigate();
    const continueClick = ()=>{
        props.client.emit("join_game",props.client.id);
    }

    return(
        <div id="homepageContainer">
            <p className="introText">Welcome!</p>
            <p className="introText">Choose your player status:</p>
            <div className="homepageBtnContainer">
                <HomepageButton state={playerState} onStateChange={()=>setPlayerState(true)} content='player'/>
                <HomepageButton state={!playerState} onStateChange={()=>setPlayerState(false)} content='quiz master'/>
            </div>
                <button className="continueBtn" onClick={()=>continueClick()}>Continue  <ArrowRight/></button>
        </div>
    )
}

export default Homepage