import { useState } from "react";
import './style/body_infos.css';

function BodyInfos(props) {
    const [genre, setGenre] = useState(props.genreUser);
    const [age, setAge] = useState(props.ageUser);
    const [dateNaissance, setDateNaissance] = useState(props.dateNaissanceUser);
    const [email, setEmail] = useState(props.mailUser);
    const [adresse, setAdresse] = useState(props.adresseUser);
    const [profession, setProfession] = useState(props.professionUser);

    const [editMode, setEditMode] = useState(false);

    const handleSave = () => {
        setEditMode(false);
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    return (
        <div className="body_infos" >
            <div className="champ_infos" >
                <label className="label_infos" htmlFor="genre">Genre : </label>
                {editMode ? (<input id="genre" value={genre} onChange={(event) => setGenre(event.target.value)} />) : (<p>{genre}</p>)}
            </div>
            <div className="champ_infos" >
                <label className="label_infos" htmlFor="age">Age : </label>
                {editMode ? (<input id="age" value={age} onChange={(event) => setAge(event.target.value)} />) : (<p>{age}</p>)}
            </div>
            <div className="champ_infos" >
                <label className="label_infos" htmlFor="dateNaissance">Date de naissance : </label>
                {editMode ? (<input id="dateNaissance" value={dateNaissance} onChange={(event) => setDateNaissance(event.target.value)} />) : (<p>{dateNaissance}</p>)}
            </div>
            <div className="champ_infos" >
                <label className="label_infos" htmlFor="email">Email : </label>
                {editMode ? (<input id="email" value={email} onChange={(event) => setEmail(event.target.value)} />) : (<p>{email}</p>)}
            </div>
            <div className="champ_infos" >
                <label className="label_infos" htmlFor="adresse">Adresse : </label>
                {editMode ? (<input id="adresse" value={adresse} onChange={(event) => setAdresse(event.target.value)} />) : (<p>{adresse}</p>)}
            </div>
            <div className="champ_infos" >
                <label className="label_infos" htmlFor="profession">Profession : </label>
                {editMode ? (<input id="profession" value={profession} onChange={(event) => setProfession(event.target.value)} />) : (<p>{profession}</p>)}
            </div>
            <div>
                {editMode ? (<button className="button_modif" onClick={handleSave} >Enregistrer</button>) : (<button className="button_modif" onClick={handleEdit} >Modifier</button>)}
            </div>
        </div>
    );
}

export default BodyInfos;