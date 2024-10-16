import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [openEmoji, setOpenEmoji] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpenEmoji(false);
    };

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
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <p>
                            In lines of code, we build and dream, Where logic
                            flows like data stream. From bits to bytes, the
                            screen will glow, In every loop, new ideas grow.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            In lines of code, we build and dream, Where logic
                            flows like data stream. From bits to bytes, the
                            screen will glow, In every loop, new ideas grow.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <p>
                            In lines of code, we build and dream, Where logic
                            flows like data stream. From bits to bytes, the
                            screen will glow, In every loop, new ideas grow.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            In lines of code, we build and dream, Where logic
                            flows like data stream. From bits to bytes, the
                            screen will glow, In every loop, new ideas grow.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <p>
                            In lines of code, we build and dream, Where logic
                            flows like data stream. From bits to bytes, the
                            screen will glow, In every loop, new ideas grow.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="./bg.jpg"/>
                        
                        <p>
                            In lines of code, we build and dream, Where logic
                            flows like data stream. From bits to bytes, the
                            screen will glow, In every loop, new ideas grow.
                        </p>
                        <span>1 minute ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" />
                    <img src="./camera.png" />
                    <img src="./mic.png" />
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        onClick={() => setOpenEmoji((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker
                            open={openEmoji}
                            onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
};

export default Chat;
