import React, { useEffect, useState } from 'react';
import './App.css';
import { JoinRoom } from './components/JoinRoom';
import GameContext, { IGameContextProps } from './gameContext';
import socketsService from './services/socketsService';

function App() {
  
  const [isInRoom,setInRoom]= useState(false);


  const connectToSocket = async() =>{
    const socket = await socketsService.connect("http://localhost:9000")
      .catch((err)=>{
        console.log("Error: ", err);
      })
  }

  useEffect(()=>{
    connectToSocket();
  },[]);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <div className="App">
        <h1>Welcome</h1>
        <div className="mainContainer">
          <JoinRoom></JoinRoom>
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
