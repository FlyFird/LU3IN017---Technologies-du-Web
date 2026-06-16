function BanniereProfil(props) {

    return (
        <div>
            <p>{props.nomBanner}</p>
            <p>{props.prenomBanner}</p>
            <p>{props.bioBanner}</p>
        </div>
    );
}

export default BanniereProfil;