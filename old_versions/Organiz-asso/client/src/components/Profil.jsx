import { useState } from "react";
import Header from "./home/Header";
import Aside from "./home/Aside";
import BanniereProfil from "./profil/BanniereProfil";
import BodyProfil from "./profil/BodyProfil";
import './profil/style/profil.css';

function Profil(props) {
    const [onglet, setOnglet] = useState("Infos");
    const [nomUser, setNomUser] = useState("nom");
    const [prenomUser, setPrenomUser] = useState("prenom");
    const [bioUser, setBioUser] = useState("Voici la biographie de l'utilisateur");

    return (
        <div className="profil">
            <Header />
            <div className="left_menu">
                <Aside />
            </div>
            <div className="right_menu">
                <BanniereProfil nomBanner={nomUser} prenomBanner={prenomUser} bioBanner={bioUser} />
                <div className="tabs">
                    <div className="single-tab_Quantum" onClick={() => setOnglet("Infos")} >
                        <p className="tab_cliquable" >Informations</p>
                    </div>
                    <div className="single-tab_Quantum" onClick={() => setOnglet("Favoris")} >
                        <p className="tab_cliquable" >Favoris</p>
                    </div>
                    <div className="single-tab_Quantum" onClick={() => setOnglet("Amis")} >
                        <p className="tab_cliquable" >Liste d'amis</p>
                    </div>
                    <div className="single-tab_Quantum" onClick={() => setOnglet("ListeMsgEnvoyes")} >
                        <p className="tab_cliquable" >Liste des messages envoyés</p>
                    </div>
                </div>
                <BodyProfil ongletActif={onglet} />
            </div>
        </div>
    );
}

export default Profil;

