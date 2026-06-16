function BodyInfos(props) {

    return (
        <div>
            <label for="genre">Genre : </label>
            <p>{props.genreUser}</p>
            <label for="age">Age : </label>
            <p>{props.ageUser}</p>
            <label for="dateNaissance">Date de naissance : </label>
            <p>{props.dateNaissanceUser}</p>
            <label for="email">Email : </label>
            <p>{props.mailUser}</p>
            <label for="adresse">Adresse : </label>
            <p>{props.adresseUser}</p>
            <label for="profession">Profession : </label>
            <p>{props.professionUser}</p>
        </div>
    );
}

export default BodyInfos;