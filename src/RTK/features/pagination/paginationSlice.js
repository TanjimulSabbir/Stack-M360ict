import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagiInfo: {}
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        getPagination: (state, action) => {
            state.pagiInfo = { ...action.payload }
        }
    }
});

export const { getPagination } = paginationSlice.actions;
export default paginationSlice.reducer;