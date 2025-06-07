import { createSelector } from 'reselect';
import { CategoriesMap } from './category.types.ts';
import { CategoriesState } from './category.reducer.ts';
import { RootState } from '../store.ts';

const selectCategoryReducer = (state: RootState): CategoriesState => {
    return state.categories;
};

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.categoriesGb
    }
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoriesMap => {
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoriesMap);
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.loading;
    }
);