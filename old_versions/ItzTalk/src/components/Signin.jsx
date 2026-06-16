import { useState } from "react";

function Signin(props) {
    const [login, setLogin] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordOK, setPasswordOK] = useState(true);

    const getLogin = (event) => {setLogin(event.target.value)};
	const getLastName = (event) => {setLastName(event.target.value)};
	const getFirstName = (event) => {setFirstName(event.target.value)};
	const getPassword = (event) => {setPassword(event.target.value)};
	const getConfirmPassword = (event) => {setConfirmPassword(event.target.value)};

    const submissionHandler = (event) => {
		if (password === confirmPassword){
			setPasswordOK(true);
			props.login();
		}
		else{
			setPasswordOK(false);
		}
	}

    return (
        <div>
            <form action={submissionHandler}>
                <label htmlFor="login">Nom d'utilisateur</label>
                <input id="login" onChange={getLogin}/>
                <label htmlFor="nom">Nom</label>
                <label htmlFor="prenom">Prénom</label>
                <input id="nom" onChange={getLastName}/>
                <input id="prenom" onChange={getFirstName}/>
                <label htmlFor="signin_password">Mot de passe</label>
                <input type="password" id="mdp" onChange={getPassword}/>
                <label htmlFor="confirm_password">Confirmer Mot de passe</label>
                <input type="password" id="confirm_mdp" onChange={getConfirmPassword}/>
                <button type="submit">Créer compte</button>
                <button type="reset">Annuler</button>
                {passwordOK ? <p></p>:<p style={{color:"red"}}>Erreur: les mots de passe sont différents !</p>}
            </form>
        </div>
    );
}

export default Signin;