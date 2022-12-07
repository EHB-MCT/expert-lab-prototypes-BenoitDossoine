import { useNavigate } from 'react-router-dom';
import Player from '../interfaces/Player'
function Scorepage(props:any){
    const navigate = useNavigate();
    
    return(
        <div className="scorepageContainer">
            <h2>Final scores!</h2>
            {
                props.finalPlayers.map((player:Player,index:number)=>{
                    return(
                        <div key={index} className="scoreContainer">
                            <p>{player.name}</p>
                            <p>{player.score}</p>
                        </div>
                    );
                })
            }
            <button className="quitBtn" onClick={()=>navigate("/")}>Quit</button>
        </div>
    )    
}
export default Scorepage;