import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUserGb: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUserGb: null
            }
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUserGb: payload
            }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
};