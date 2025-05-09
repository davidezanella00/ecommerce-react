import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category.types';

export const setCategoriesGb = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
};

export const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);
};

export const fetchCategoriesFailed = (error) => {
    return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
};