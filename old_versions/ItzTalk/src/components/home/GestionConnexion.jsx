import { useNavigate } from "react-router-dom";

function GestionConnexion(props) {
    const navigate = useNavigate();

    return (
        <nav class="connect">
                <button type="submit" onClick={() => navigate("/Login")}>Connexion</button>
                <button type="submit" onClick={() => navigate("/Signin")}>Enregistrement</button>
        </nav>
    );
}

export default GestionConnexion;