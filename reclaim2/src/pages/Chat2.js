import React, { useEffect, useState } from 'react'
import "./Chat.css"
import ScrollToBottom from "react-scroll-to-bottom";

function Chat2({socket, username, room}) {
    const[currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
    const sendMessage = async() => {
        if(currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessageList((list) => [...list, data]);
        })
    }, [socket])
    
    return (
        <div className='chat-window'>
            
            <div className='chat-header'>
                <h3 style={{textAlign:"center", fontWeight:"bold"}}>LIVE CHAT</h3>
            </div>

            {/* CHATTING SECTION */}
            <div className='chat-body'>
            <ScrollToBottom className="message-container">
                {messageList.map((messageContent) => {
                     return (
                        <div
                          className="message"
                          id={username === messageContent.author ? "you" : "other"}
                        >
                          <div>
                            <div className="message-content">
                              <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                              <p id="time">{messageContent.time}</p>
                              <p id="author">{messageContent.author}</p>
                            </div>
                          </div>
                        </div>
                      );
                })}
            </ScrollToBottom>
            </div>
        
            {/* CHAT FOOTER */}

            <div className='chat-footer'>
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="type your message here..."
                    onChange={(event) => {
                      setCurrentMessage(event.target.value)
                    }}
                />
                <button onClick={sendMessage}>&#9568;</button>
            </div>
            
        </div>

        

  )
}

export default Chat2