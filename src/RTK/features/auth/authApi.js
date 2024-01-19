import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ data,accessToken }) => {
                // "/register" api showing problem, but "/users" api giving success response. 
                // for a successful response I'm using "/users" api
                return {
                    url: "/users",
                    method: "POST",
                    body: data
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const authData = {
                        accessToken: arg.accessToken,
                        user: result.data
                    }
                    localStorage.setItem("auth", JSON.stringify({ ...authData }))
                    dispatch(userLoggedIn({ ...authData }));

                } catch (error) {
                  toast.error("Error")
                }
            }
        }),
        login: builder.mutation({
            query: ({ data }) => {
                return {
                    url: "/login",
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result?.data?.token) {
                        const authData = {
                            accessToken: result.data.token,
                            user: arg.data
                        }
                        localStorage.setItem("auth", JSON.stringify({ ...authData }))
                        dispatch(userLoggedIn({ ...authData }))
                    }

                } catch (error) {
                   toast.error("Error")
                }
            }
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;