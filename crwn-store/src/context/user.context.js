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
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUserGlobal(user)
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser: currentUserGlobal,
        setCurrentUser: setCurrentUserGlobal
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};