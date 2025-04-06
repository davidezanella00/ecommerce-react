import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUserGlobal, setCurrentUserGlobal] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user)
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUserGlobal(user)
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider
            value={{
                currentUser: currentUserGlobal,
                setCurrentUser: setCurrentUserGlobal
            }}>
            {children}
        </UserContext.Provider>
    )
};