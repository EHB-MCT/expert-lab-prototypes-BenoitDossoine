import { RoomController } from './api/controllers/roomController';
import { MainController } from './api/controllers/mainController';
import {Server} from "socket.io";
import {useSocketServer} from "socket-controllers";

export default (httpServer)=>{
    const io = new Server(httpServer,{
        cors: {
            origin: "*"
        },
    })

    // io.on("connection",(socket)=>{console.log("New socket: ", socket.id)});
    useSocketServer(io,{controllers:[MainController,RoomController]});

    return io;
}