import React, { useContext, useState } from "react";
import gameContext from "../gameContext";
import socketsService from "../services/socketsService";
import gameService from "../services/socketsService/gameService";

interface IJoinRoomProps{}

export function JoinRoom(props:IJoinRoomProps){

    const [roomName,setRoomName] = useState("");
    const [isJoining, setJoining] = useState(false);

    const {setInRoom, isInRoom} = useContext(gameContext);

    const handleRoomNameChange = (e:any)=>{
        const value = e.target.value;
        setRoomName(value);
    }

    const joinRoom = async (e:any)=>{
        e.preventDefault();

        const socket = socketsService.socket;
        if(!roomName || roomName.trim()==="" || !socket){
            return;
        }
        setJoining(true);

        const joined = await gameService.joinGameRoom(socket,roomName)
            .catch((err)=>{
                alert(err.error)
            });

        if(joined){
            setInRoom(true)
        }
        setJoining(false);
    }

    return(
    <div className="joinRoomContainer" onSubmit={joinRoom}>
        <form>
            <input type="text" name="roomId" id="roomIdInput" placeholder="Room ID"
            value={roomName}
            onChange={handleRoomNameChange}/>
            <button type="submit" disabled={isJoining}>{isJoining?"Joining...":"Join"}</button>
        </form>
    </div>
    )
}
