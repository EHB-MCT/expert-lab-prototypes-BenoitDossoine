import HomepageButton from "./HomepageButton"
import {useState} from "react"
import {ArrowRight} from "react-feather"
import {useNavigate} from "react-router-dom";

function Homepage(props:any){
    const [playerState,setPlayerState] = useState(true);
    const [playerName,setPlayerName] = useState("");

    const continueClick = ()=>{
        if(playerState){
            props.client.emit("join_game",playerName);
            return;
        }
        props.client.emit("join_master");
    }
    
    return(
        <div id="homepageContainer">
            <p className="introText">Welcome!</p>
            <p>What's your name?</p>
            <input id="nameInput" type="text" placeholder="Write your name" onChange={(e)=>setPlayerName(e.target.value)} />
            <p className="introText">Choose your player status:</p>
            <div className="homepageBtnContainer">
                <HomepageButton state={playerState} onStateChange={()=>setPlayerState(true)} content='player'/>
                <HomepageButton state={!playerState} onStateChange={()=>setPlayerState(false)} content='quiz master'/>
            </div>
                <button className="continueBtn" onClick={()=>continueClick()}>Continue <ArrowRight/></button>
        </div>
    )
}

export default Homepage