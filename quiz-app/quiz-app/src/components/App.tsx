import {useEffect,useState} from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Masterpage from "./Masterpage";
import { socketsService } from '../services/SocketsService';

import {io} from "socket.io-client";
import Player from '../interfaces/Player';
import { StoreState } from "../Store/store.types";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayerList } from '../Store/Players/Selectors';
import { updatePlayers } from '../Store/Players/Actions';

const client = io('ws://127.0.0.1:8000');
function App() {

  const playerList = useSelector<StoreState, Player[]>(
    selectPlayerList
  )

  // const [players,setPlayers] = useState<Player[]>([{id: 235, name: 'Benoit', type: 'Game Master'}]);
  const dispatch = useDispatch();
  useEffect(()=>{
    socketsService.onConnect();
  },[])
  return (
    <Routes>
      <Route path="/" element={<Homepage client={client}/>}></Route>
      <Route path="/admin" element={<Masterpage/>}></Route>
      <Route path="/quiz"></Route>
    </Routes>
  );
}

export default App;
