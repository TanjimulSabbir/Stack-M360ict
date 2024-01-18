import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../RTK/features/api/apiSlice";
import authSlice from "../RTK/features/auth/authSlice";
import paginatinSlice from "../RTK/features/Pagination/paginatinSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        pagination: paginatinSlice,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})