import { cp } from "fs";
import {io, Socket } from "socket.io-client";
class SocketService {
    public socket:Socket |null = null;

    public connect(url:string){
        return new Promise((resolve,reject)=>{
            this.socket = io(url);

            if(!this.socket){
                reject();
            }
            this.socket.on("connect", ()=>{
                this.socket?.emit("custom_event", "ping")
                resolve(this.socket);
            })

            this.socket.on("connect_error", (error)=>{
                console.log("Connection error: ",error);
                reject(error);
            })
        })
    }
}

export default new SocketService();