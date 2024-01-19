import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagiInfo: {},
    currentPage: 1,
    paginationData: []
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPagination: (state, action) => {
            // This is for RTK Query
            state.pagiInfo = { ...action.payload }
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        addPaginationData: (state, action) => {
            state.paginationData = state.paginationData.push(action.payload);
        }
    }
});

export const { setPagination, setPage, addPaginationData } = paginationSlice.actions;
export default paginationSlice.reducer;