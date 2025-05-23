import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUserGb: null
}

export const userReducerSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUserGb(state, action) {
            state.currentUserGb = action.payload;
        }
    }
});

export const { setCurrentUserGb } = userReducerSlice.actions;

export const userReducer = userReducerSlice.reducer;