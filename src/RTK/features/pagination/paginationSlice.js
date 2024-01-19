import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagiInfo: {},
    currentPage: 1,
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.pagiInfo = { ...action.payload }
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },

    }
});

export const { setPagination, setPage } = paginationSlice.actions;
export default paginationSlice.reducer;