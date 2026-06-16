import { useState } from "react";
import NavigationPanel from "./NavigationPanel";
import Signin from "./Signin"

function MainPage(props) {
    const [mainPage, setMainPage] = useState("signin_page");
    const [isConnected, setIsConnected] = useState(false);

    const getConnected = () => {
        setIsConnected(true);
        setMainPage("message_page");
    }

    const setLogout = () => {
        setIsConnected(false);
        setMainPage("signin_page");
    }

    return (
        <div className="MainPage">
            {pagePrincipale==="signin_page" ? <Signin login={getConnected}/> : <NavigationPanel login={getConnected} logout={setLogout} isConnected={isConnected} />}
        </div>
    );
}

export default MainPage;