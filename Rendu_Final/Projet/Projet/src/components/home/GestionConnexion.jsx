import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './style/connexion.css';

function GestionConnexion(props) {
    const navigate = useNavigate();

    if (props.isConnected) {
        return (
            <div className="logged_user">
                <p>{props.user.username}</p>
                <button className="logout_button" type="submit" onClick={props.handleLogout}>Déconnexion</button>
                <img src={props.user.profilPic} alt="Profil" onClick={() => navigate("/Profil")} />
            </div>
        )
    }
    return (
        <nav className="connect">
                <button className="connexion_button" type="button" onClick={() => navigate("/Login")}>Connexion</button>
                <button className="connexion_button" type="button" onClick={() => navigate("/Signin")}>Enregistrement</button>
        </nav>
    );
}

export default GestionConnexion;