import { ConnectedSocket, MessageBody, OnMessage, SocketController, SocketIO } from "socket-controllers";
import { Server, Socket } from "socket.io";

@SocketController()
export class RoomController{

    @OnMessage("join_game")
    public async joinGame(
        @SocketIO() io: Server,
        @ConnectedSocket() socket: Socket,
        @MessageBody() message:any
    ){
        console.log("New User joining room: ", message);
        
        const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
        // socket has default room equal to own id
        const socketRooms = Array.from(socket.rooms.values()).filter((room)=> room !==socket.id);

        // make sure socket is connected to only one room and that there can't be more than 2 rooms
        if(socketRooms.length > 0 || connectedSockets && connectedSockets.size == 2){
            socket.emit("room_join_error", {
                error: "Room is full, please choose another room to play!"
            });
        } else {
            //if room doesn't exist, it will be created
            //if it already exists, the client will be joined
            await socket.join(message.roomId)
            socket.emit("room_joined");
        }
    }
}