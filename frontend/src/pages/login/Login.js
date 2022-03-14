import "./login.css";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
	const email = useRef();
	const password = useRef();
	const { isFetching, dispatch } = useContext(AuthContext);

	const handleClick = (e) => {
		e.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
	};

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Lunasocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on
						Lunasocial.
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={handleClick}>
						<input
							type="email"
							required
							ref={email}
							className="loginInput"
							placeholder="Email"
						/>
						<input
							type="password"
							required
							minLength="6"
							ref={password}
							className="loginInput"
							placeholder="Password"
						/>
						<button
							className="loginButton"
							type="submit"
							disabled={isFetching}
						>
							{isFetching ? (
								<CircularProgress color="inherit" />
							) : (
								"Log In"
							)}
						</button>
						<span className="loginForgot">Forgot Password?</span>
						<button className="loginRegisterButton">
							{isFetching ? (
								<CircularProgress color="inherit" />
							) : (
								"Create a new account"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
