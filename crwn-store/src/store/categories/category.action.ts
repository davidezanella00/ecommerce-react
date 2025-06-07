import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils.ts';
import { CATEGORIES_ACTION_TYPE, Category } from './category.types.ts';


export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>;


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);
});

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
});