import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUserGb: null
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUserGb: payload
            }
        default:
            return state;
    }
};