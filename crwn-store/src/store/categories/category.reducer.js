import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesGb: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
            return {
                ...state,
                categoriesGb: payload
            }
        default:
            return state;
    }
};