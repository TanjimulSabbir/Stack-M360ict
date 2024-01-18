import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page) => ({
                url: `/users?per_page=10&page=${page}`
            })
        }),
        specifiedUser: builder.query({
            query: (id) => ({
                url: `/users?email=${id}`
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

export const { useGetUsersQuery, useSpecifiedUserQuery, useEditUserMutation } = usersApi;