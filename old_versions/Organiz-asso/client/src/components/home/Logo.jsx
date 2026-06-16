import { useNavigate } from "react-router-dom";
import logo from "./img/logo_forum.png";
import './style/logo.css';

function Logo(props) {
    const navigate = useNavigate();

    return (
        <div className="logo">
            <img src={logo} alt="Home" className="logo_cliquable" onClick={() => navigate("/")} />
        </div>
    );
}

export default Logo;