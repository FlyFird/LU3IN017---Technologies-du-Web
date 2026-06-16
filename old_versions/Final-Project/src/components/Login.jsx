import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './style/login.css';

function Login (props) {
    const navigate = useNavigate();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	
	const getLogin = (evt) => {setLogin(evt.target.value)}
	const getPassword = (evt) => {setPassword(evt.target.value)} 	

	const handleSubmit = (event) => {
		event.preventDefault();

		props.handleLogin(login);
		navigate("/");
	};

	return (
		<div className='p-signBase'>
			<div className='p-signBase__header'>
				<p className='p-signBase__header_title'>Connexion</p>
			</div>
			<form className='login_form' onSubmit={handleSubmit}>
				<div className='p-sessions__formgroup'>
					<label htmlFor="login">Login</label>
					<input id="login" type='text' placeholder='Login' onChange={getLogin}/>
				</div>
				<div className='p-sessions__formgroup'>
					<label htmlFor="mdp">Mot de passe</label>
					<input id="mdp" type="password" placeholder='Mot de passe' onChange={getPassword}/>
				</div>
				<a class="p-sessions__forget_password" href="/users/password/new">Mot de passe oublié ?</a>
				<button type="submit">Se connecter</button>
			</form>
			<p className='p-sessions__signup_text'>Pas encore de compte ? <Link className="p-sessions__login_link" to="/Signin">Appuyez ici pour vous enregistrer</Link> </p>
			<button className='login_return_button' onClick={() => navigate("/")} >Retour</button>
		</div>
		
	 );
}

export default Login;