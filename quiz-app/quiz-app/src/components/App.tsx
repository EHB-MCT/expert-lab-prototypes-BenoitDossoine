import {useEffect,useState} from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Masterpage from "./Masterpage";
import { socketsService } from '../services/SocketsService';

import {io} from "socket.io-client";
import GameState from '../interfaces/GameState';
import Quiz from './Quiz';

const client = io('ws://127.0.0.1:8000');
function App() {

  const [gameState,setGameState] = useState<GameState>({
    "players": [],
    "playing": false,
  })

  useEffect(()=>{
    client.on("connect",()=>{
      console.log("connected!");
      client.on("player_joined",(player:any)=>{
        const newPlayerList = {"players":gameState.players.push(player)}; 
        setGameState(gameState => {
          return{...gameState,newPlayerList}
        })
      })
    })

  },[])

  return (
    <Routes>
      <Route path="/" element={<Homepage client={client} gameState={gameState}/>}></Route>
      <Route path="/admin" element={<Masterpage/>}></Route>
      <Route path="/quiz" element={<Quiz client={client} gameState={gameState}/>}></Route>
    </Routes>
  );
}

export default App;
