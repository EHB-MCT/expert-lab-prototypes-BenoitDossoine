import HomepageButton from "./HomepageButton"
import {useState} from "react"
import {ArrowRight} from "react-feather"
import {useNavigate} from "react-router-dom";

function Homepage(props:any){
    const [playerState,setPlayerState] = useState(true);
    const navigate = useNavigate();
    const continueClick = ()=>{
        if(props.gameState.players.length<2){
            props.client.emit("join_game",props.client.id);
            navigate("/quiz");
        } else{
            alert("Too much players in there, sorry!");
        }
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