import {useEffect,useState} from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Masterpage from "./Masterpage";

import {w3cwebsocket as W3CWebSocket} from 'websocket';
import Player from '../interfaces/Player';
import { StoreState } from "../Store/store.types";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayerList } from '../Store/Players/Selectors';
import { updatePlayers } from '../Store/Players/Actions';

const client = new W3CWebSocket('ws://127.0.0.1:8000');
function App() {

  const playerList = useSelector<StoreState, Player[]>(
    selectPlayerList
  )

  // const [players,setPlayers] = useState<Player[]>([{id: 235, name: 'Benoit', type: 'Game Master'}]);
  const dispatch = useDispatch();
  useEffect(()=>{
    client.onmessage = (message:any)=>{
      const data = JSON.parse(message.data);
      if(data.type == 'playerUpdate'){
        console.log(playerList);
        dispatch(updatePlayers(data.msg))
      }      
    }
  },[dispatch])
  return (
    <Routes>
      <Route path="/" element={<Homepage client={client}/>}></Route>
      <Route path="/admin" element={<Masterpage/>}></Route>
      <Route path="/quiz"></Route>
    </Routes>
  );
}

export default App;
