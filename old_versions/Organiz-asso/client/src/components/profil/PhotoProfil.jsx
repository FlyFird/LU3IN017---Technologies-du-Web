import { useState } from "react";
import default_pdp from './img/photo_profil_default.png'
import './style/photo_profil.css';

function PhotoProfil(props) {
    const [photoProfil, setPhotoProfil] = useState(default_pdp);

    return (
        <div class="photo_profil">
            <img className="photo_de_profil" alt="Photo de profil" src={photoProfil} />
        </div>
    );
}

export default PhotoProfil;