import { AnyAction } from "redux-saga";
import { Category } from "./category.types.ts";
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action.ts";

export type CategoriesState = {
    readonly categoriesGb: Category[];
    readonly loading: boolean;
    readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categoriesGb: [],
    loading: false,
    error: null
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {} as AnyAction
): CategoriesState => {

    if (fetchCategoriesStart.match(action)) {
        return {
            ...state,
            loading: true,
        };
    }
    if (fetchCategoriesSuccess.match(action)) {
        return {
            ...state,
            categoriesGb: action.payload,
            loading: false,
        };
    }
    if (fetchCategoriesFailed.match(action)) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    }
    return state;
};