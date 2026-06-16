import BodyInfos from "./components/profil/BodyInfos";
import BodyFavoris from "./components/profil/BodyFavoris";
import BodyListeMsgEnvoyes from "./components/profil/BodyListeMsgEnvoyes";
import BodyListeAmis from "./components/profil/BodyListeAmis";

function BodyProfil(props) {

    return (
        <div>
            {(() => {
                switch (props.ongletActif) {
                    case "Infos":
                        <BodyInfos genreUser={""} ageUser={""} dateNaissanceUser={""} mailUser={""} adresseUser={""} professionUser={""} />
                    
                    case "Favoris":
                        <BodyFavoris listeMsgEnvoyes={""} />
                    
                    case "ListeMsgEnvoyes":
                        <BodyListeMsgEnvoyes listeMsgEnvoyes={""} />
                        
                    case "Amis":
                        <BodyListeAmis listeAmis={""} />
                    
                    default:
                        <BodyInfos genreUser={""} ageUser={""} dateNaissanceUser={""} mailUser={""} adresseUser={""} professionUser={""} />
                }
            })}
        </div>
    );
}

export default BodyProfil;