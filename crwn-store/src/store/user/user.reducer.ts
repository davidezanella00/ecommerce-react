import { AnyAction } from "redux-saga";
import { UserData } from "../../utils/firebase/firebase.utils.ts";
import {signOutSuccess, signInSuccess, signInFailed, signOutFailed} from "./user.action.ts";

export type UserState = {
    readonly currentUserGb: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
    currentUserGb: null,
    isLoading: false,
    error: null
}

export const userReducer = (
    state = INITIAL_STATE, 
    action = {} as AnyAction
): UserState => {

    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUserGb: null
        };
    }
    if (signInSuccess.match(action)) {
        return {
            ...state,
            currentUserGb: action.payload,
        };
    }
    if (signInFailed.match(action) || signOutFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
        };
    }
    return state;
};