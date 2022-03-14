import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
	user: {
		_id: "62276425c13f996fe4927d34",
		username: "Mark Zuckerberg",
		email: "mark@zuckerberg.com",
		profilePicture: "/person/1.jfif",
		coverPicture: "/post/1.webp",
		followers: [],
		following: [],
		isAdmin: false,
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
