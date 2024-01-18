import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagiInfo: {}
}

const pagination = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        getPagination: (state, action) => {
            state.pagiInfo = { ...action.payload }
        }
    }
});

export const { getPagination } = pagination.actions;
export default pagination.reducer;