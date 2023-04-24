import io from "socket.io-client";
import { useState } from "react";
import Chat2 from "./Chat2";
import "./Chat.css";
import NavBar from "../components/NavBar";
const socket = io.connect("http://localhost:3001");

export default function Chat() {
  
  const[username, setUsername] = useState("");
  const[room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  
  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  
  return (
    <div>       
      <NavBar/>
            {/* ROOM IS FOR PRIVACY FOR CHATS, BOTH THE USERS SHOULD HAVE SAME ROOM */}
            {!showChat ? (
            <div className="joinChatContainer">
              <h3 style={{textAlign:"center", fontWeight: "bold"}}>Join A Chat</h3>
              {/* ENTERING USERNAME  */}
              <input
                class="w-1/2 bg-gray-300 py-3 px-3 rounded-sm"
                type="text"
                placeholder="John..."
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />

              {/* ENTERING ROOM NUMBER */}
              <input
                type="text"
                placeholder="Room Number..."
                class="w-1/2 bg-gray-300 py-3 px-3 rounded-sm"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              
              {/* JOIN ROOM BUTTON */}
              <button onClick={joinRoom}> Join A Room</button>
            </div>
            )
          : ( 
            <Chat2 socket={socket} username={username} room={room}/> 
          )}
    </div>
  );
}
