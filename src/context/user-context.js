import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const authUserExists = authenticatedUser?.uid?.length > 0;

    async function setUser(signedInUser) {
        setAuthenticatedUser({
            displayName : signedInUser.displayName,
            email : signedInUser.email,
            photoURL : signedInUser.photoURL,
            uid : signedInUser.uid,
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