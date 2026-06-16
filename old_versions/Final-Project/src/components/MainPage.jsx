import { useState } from "react";
import Header1 from "./home/Header1";
import Body from "./home/Body"
import default_profilpic from "./home/img/logo_forum.png";
import './style/main_page.css';

function MainPage(props) {
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
        <div className="main_page">
            <Header1 isConnected={isConnected} handleLogout={() => setIsConnected(false)} />
            <Body/>
        </div>
    );
}

export default MainPage;