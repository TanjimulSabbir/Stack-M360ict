import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
import { useNavigate } from "react-router-dom";
import UseNavigateToDash from "../../../components/hooks/useNavigateToDash";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ data, accessToken }) => {

                return {
                    url: "/register",
                    method: "POST",
                    body: data
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const authData = {
                        accessToken: result?.data?.token,
                        user: arg.data
                    }
                    localStorage.setItem("auth", JSON.stringify({ ...authData }))
                    dispatch(userLoggedIn({ ...authData }));
                } catch (error) {
                    // toast.error("Error")
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
                    // toast.error("Error")
                }
            }
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;