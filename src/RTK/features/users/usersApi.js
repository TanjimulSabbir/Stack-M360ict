import { apiSlice } from "../Api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page = 2) => ({
                url: `/users?per_page=10&page=${page}`
            })
        }),
        specifiedUser: builder.query({
            query: (email) => ({
                url: `/users?email=${email}`
            })
        }),
        addUser: builder.mutation({
            query: ({ data }) => ({
                url: "/register",
                method: "POST",
                body: data
            })
        }),
        editUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data
            })
        }),
    })
})

export const { useGetUsersQuery, useSpecifiedUserQuery, useAddUserMutation, useEditUserMutation } = usersApi;