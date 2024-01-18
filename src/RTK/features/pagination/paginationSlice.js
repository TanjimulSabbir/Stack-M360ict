import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pagiInfo: {}
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPagination: (state, action) => {
            state.pagiInfo = { ...action.payload }
        }
    }
});

export const { setPagination } = paginationSlice.actions;
export default paginationSlice.reducer;