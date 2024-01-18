import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ data }) => {
                console.log(data, "from usersApi");
                return {
                    url: "/users",
                    method: "POST",
                    body: data,
                };
            },
    }),
    login: builder.mutation({
        query: ({ data }) => {
            console.log(data, "from usersApi");
            return {
                url: "/login",
                method: "POST",
                body: data,
            };
        }
    })
})
})

export const { useRegisterMutation, useLoginMutation } = authApi;