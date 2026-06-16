import { useState } from 'react';

function Login (props) {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	
	const getLogin = (evt) => {setLogin(evt.target.value)}
	const getPassword = (evt) => {setPassword(evt.target.value)} 	

	return (
		<form action={props.login}>
			<label htmlFor="login">Login</label><input id="login" onChange={getLogin}/>
			<label htmlFor="mdp">Mot de passe</label><input type="password" id="mdp"  onChange={getPassword}/>
			<button type="submit">Se connecter</button><button type="reset">Annuler</button>
		</form>	 
	 );
}

export default Login;