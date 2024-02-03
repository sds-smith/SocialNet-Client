import { useState, createContext } from "react";
import { getUser, login, logout } from "../utils/auth";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(getUser);

    const authUserExists = Boolean(authenticatedUser);

    async function setUser() {
        setAuthenticatedUser(getUser)
    }

    async function logoutUser() {
        await logout();
        setUser();
    }

    async function loginUser() {
        await login();
        setUser();
    };

    const value = {
        authenticatedUser,
        loginUser,
        authUserExists,
        logoutUser
    }

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}