import { useState } from "react";
import Header from "./home/Header1";
import Body from "./home/Body"
import default_profilpic from "./home/img/logo_forum.png";
import './style/main_page.css';

function PrivateChat(props) {

    const [isConnected, setIsConnected] = useState(false);
    const [username, setUsername] = useState("");
    const [profilPic, setProfilePic] = useState(default_profilpic);

    const handleLogin = ({log_username, log_profilpic}) => {
        setIsConnected(true);
        setUsername(log_username);
        setProfilePic(log_profilpic);
    };

    const handleLogout = () => {
        setIsConnected(false);
        setUsername("");
        setProfilePic(default_profilpic);
    };

    return (
        <>
            <style>{`
                .private-chat-page {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    font-family: sans-serif;
                }

                .sidebar {
                    width: 25%;
                    background-color: #f4f4f4;
                    border-right: 1px solid #ccc;
                    padding: 1rem;
                }

                .chat-window {
                    width: 75%;
                    padding: 2rem;
                    background-color: #fff;
                    overflow-y: auto;
                }

                .chat-message {
                    margin-bottom: 1rem;
                }

                .chat-message strong {
                    color: #3b82f6;
                }
            `}</style>
        <div className="main_page">
            <Header isConnected={isConnected} handleLogout={() => setIsConnected(false)} />
            <Body/>
        </div>
        </> 
    );
}

export default PrivateChat;
