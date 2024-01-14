import { useState, createContext } from "react";
import { useAddUser } from "../utils/hooks/apollo.hooks";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const { addUser } = useAddUser();

    const authUserExists = authenticatedUser?.uid?.length > 0;

    async function setUser(authUser) {
        const user = await addUser({
            displayName : authUser.displayName,
            email : authUser.email,
            photoURL : authUser.photoURL,
            uid : authUser.uid,
        })
        setAuthenticatedUser(user)
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