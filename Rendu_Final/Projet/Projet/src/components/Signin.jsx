import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './style/signin.css';

function Signin(props) {
    const navigate = useNavigate();

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
		e.preventDefault();

		if (password === confirmPassword){
			setPasswordOK(true);
		    props.handleLogin(login);
            navigate("/Login")
		}
		else{
			setPasswordOK(false);
		}
	}

    return (
        <div className='p-signBase'>
            <div className='p-signBase__header'>
				<p className='p-signBase__header_title'>Nouveau Membre</p>
			</div>
            <form className="signin_form" onSubmit={submissionHandler}>
				<div className='p-sessions__formgroup'>
                    <label htmlFor="login">Nom d'utilisateur</label>
                    <input id="login" onChange={getLogin}/>
                </div>
                <div className='p-sessions__formgroup'>
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder='exemple@gmail.com' onChange={getLogin}/>
                </div>
                <div className='p-sessions__formgroup'>
                    <label htmlFor="signin_password">Mot de passe</label>
                    <input id="mdp" type="password" placeholder='Mot de passe' onChange={getPassword}/>
                    <input id="confirm_mdp" type="password" placeholder='Confirmer Mot de passe' onChange={getConfirmPassword}/>
                </div>
                <button type="submit">Créer compte</button>
                {passwordOK ? <p></p>:<p style={{color:"red"}}>Erreur: les mots de passe sont différents !</p>}
            </form>
            <p className='p-sessions__login_text'>Déjà inscrit ? <Link className="p-sessions__login_link" to="/Login">Appuyez ici pour vous connecter</Link> </p>
            <button className='login_return_button' onClick={() => navigate("/")} >Retour</button>
        </div>
    );
}

export default Signin;