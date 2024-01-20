import { useState, createContext } from "react";
import { getUser, googleLogin, logout } from "../utils/auth";
import { signInWithGooglePopup, signOutUser } from "../utils/firebase/firebase.utils";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(getUser);

    const authUserExists = Boolean(authenticatedUser);

    async function setUser(signedInUser) {
        setAuthenticatedUser(signedInUser)
    }

    async function logoutUser() {
        await signOutUser() 
        logout();
        setAuthenticatedUser(null)
    }

    async function authAction() {
        if (authUserExists) {
          await signOutUser();
          logoutUser();
          logout();
        } else {
          const { user } = await signInWithGooglePopup();
          await googleLogin(user);
          setUser(user);
        };
    };

    const value = {
        authenticatedUser,
        authAction,
        authUserExists
    }

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}