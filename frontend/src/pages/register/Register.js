import "./register.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const confirmPassword = useRef();
	const navigate = useNavigate();

	const handleClick = async (e) => {
		e.preventDefault();
		if(confirmPassword.current.value !== password.current.value){
			confirmPassword.current.setCustomValidity("Passwords don't match!");
		}else{
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value
			}
			try{
				await axios.post("/auth/register", user);
				navigate("/login");
			}catch(error){
				console.log(error);
			}
		}
	}

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Lunasocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on Lunasocial.
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={handleClick}>
						<input required ref={username} className="loginInput" placeholder="Username" />
						<input required ref={email} className="loginInput" placeholder="Email" />
						<input required ref={password} type="password" minLength="6" className="loginInput" placeholder="Password" />
						<input required ref={confirmPassword} type="password" className="loginInput" placeholder="Confirm Password" />
						<button className="loginButton" type="submit">Sign Up</button>
						<button className="loginRegisterButton">Log in to your account</button>
					</form>
				</div>
			</div>
		</div>
	)
}