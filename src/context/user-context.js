import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null)

    const authUserExists = authenticatedUser?.uid?.length > 0;

    function setUser(user) {
        setAuthenticatedUser({
            displayName : user.displayName,
            email : user.email,
            photoURL : user.photoURL,
            uid : user.uid,
        })
    }

    function logoutUser() {
        setAuthenticatedUser(null)
    }

    const value = {
        authenticatedUser,
        setUser,
        logoutUser,
        authUserExists
    }

    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}