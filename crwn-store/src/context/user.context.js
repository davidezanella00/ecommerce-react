import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUserGb: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUserGb: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in useReducer`)
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { currentUserGb } = state;
    const setCurrentUserGb = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUserGb(user)
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser: currentUserGb,
        setCurrentUser: setCurrentUserGb
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};