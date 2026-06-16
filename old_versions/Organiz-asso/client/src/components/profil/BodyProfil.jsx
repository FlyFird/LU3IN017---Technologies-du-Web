import BodyInfos from "./BodyInfos";
import BodyFavoris from "./BodyFavoris";
import BodyListeMsgEnvoyes from "./BodyListeMsgEnvoyes";
import BodyListeAmis from "./BodyListeAmis";

function BodyProfil(props) {

    switch (props.ongletActif) {
        case "Infos":
            return <BodyInfos genreUser={""} ageUser={""} dateNaissanceUser={""} mailUser={""} adresseUser={""} professionUser={""} />
        
        case "Favoris":
            return <BodyFavoris listeMsgEnvoyes={""} />
            
        case "Amis":
            return <BodyListeAmis listeAmis={""} />
        
        case "ListeMsgEnvoyes":
            return <BodyListeMsgEnvoyes listeMsgEnvoyes={""} />
        
        default:
            return <BodyInfos genreUser={""} ageUser={""} dateNaissanceUser={""} mailUser={""} adresseUser={""} professionUser={""} />
    }
}

export default BodyProfil;