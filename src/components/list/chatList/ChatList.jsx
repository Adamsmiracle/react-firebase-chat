import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
    const [addMode, setAddMode] = useState(true);

    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" />
                    <input type="text" placeholder="search" />
                </div>
                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>

            {/* Individual items */}
            <div className="item">
                <img src="./avatar.png" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" />
                <div className="texts">
                    <span>John Doe</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    );
};

export default ChatList;
