import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(true);
  
  const handleEmoji = (e) => {
    console.log(e.emoji);
  }

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <span>John Doe</span>
                        <p>This is the user description</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" />
                    <img src="./video.png" />
                    <img src="./info.png" />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" />
                    <img src="./camera.png" />
                    <img src="./mic.png" />
                </div>
                <input type="text" placeholder="Type a message..." />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        onClick={() => setOpenEmoji((prev) => !prev)}
                    />
                    <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
};

export default Chat;
