import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
    categoriesGb: [],
};

export const categoriesReducerSlice= createSlice({
    name: 'categories',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategoriesGb(state, action) {
            state.categoriesGb = action.payload;
        }
    }
});

export const { setCategoriesGb } = categoriesReducerSlice.actions;
export const categoriesReducer = categoriesReducerSlice.reducer;