import PhotoProfil from "./components/profil/PhotoProfil";
import BanniereProfil from "./components/profil/BanniereProfil";
import Deconnexion from "./components/profil/Deconnexion";

function HeaderProfil(props) {

    return (
        <div>
            <PhotoProfil/>
            <BanniereProfil/>
            <Deconnexion/>
        </div>
    );
}

export default HeaderProfil;