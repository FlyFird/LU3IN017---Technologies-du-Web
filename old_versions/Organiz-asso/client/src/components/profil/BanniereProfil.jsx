import PhotoProfil from './PhotoProfil'
import './style/banniere_profil.css';

function BanniereProfil(props) {

    return (
        <div className='banniere_profil' >
            <div className='banniere_infos_user' >
                <PhotoProfil/>
                <p className="banner_nom" >{props.nomBanner}</p>
                <p className="banner_prenom" >{props.prenomBanner}</p>
            </div>
            <div className='banniere_infos_user' >
                <p className="banner_bio" >{props.bioBanner}</p>
            </div>
        </div>
    );
}

export default BanniereProfil;