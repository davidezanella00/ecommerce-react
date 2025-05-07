import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesGb: [],
    loading: false,
    error: null
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
            return {
                ...state,
                loading: true,
            }
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesGb: payload,
                loading: false,
            }
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};