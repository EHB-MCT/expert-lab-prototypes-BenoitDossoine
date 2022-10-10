import {io} from "socket.io-client";
class SocketsService {
    private readonly client = io('ws://127.0.0.1:8000');
    public onConnect(){
        this.client.on("connect", ()=>{
            console.log("Connected!");
          })
    }
}

export const socketsService = new SocketsService();