import { useState, createContext } from "react";
import { useUser } from "../utils/hooks/apollo.hooks";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const user = useUser();

    const authUserExists = authenticatedUser?.uid?.length > 0;

    async function setUser(signedInUser) {
        const userResponse = await user({
            displayName : signedInUser.displayName,
            email : signedInUser.email,
            photoURL : signedInUser.photoURL,
            uid : signedInUser.uid,
        })
        setAuthenticatedUser(userResponse)
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