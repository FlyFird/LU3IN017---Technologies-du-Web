import { useNavigate } from "react-router-dom";
import './style/aside.css';

function Aside(props) {
    const navigate = useNavigate();

    return (
        <aside className='aside_main' >
            <button className='aside_main_button' onClick={() => navigate("/")} >Home</button>
            <button className='aside_main_button' onClick={() => navigate("/Profil")} >Profil</button>
        </aside>
    );
}

export default Aside;