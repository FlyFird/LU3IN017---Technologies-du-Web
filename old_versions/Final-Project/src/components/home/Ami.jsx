import { useState } from "react";
import default_pdp from '../profil/img/photo_profil_default.png'
import './style/ami.css';

function Message(props) {
    const [photoProfil, setPhotoProfil] = useState(default_pdp);
    const [username, setUsername] = useState("None");

    return (
        <li className="affichage_ami" >
            <img className="photo_de_profil" alt="Photo de profil" src={photoProfil} />
            <p className="nom_profil" >{username}</p>
        </li>
    );
}

export default Message;