import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    allUserData: [{
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }]
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsersData: (state, action) => {
            state.allUserData.push({ ...action.payload });
        },
        addUser: (state, action) => {
            const id = state.allUserData.length + 1
            state.allUserData.push({ id, ...action.payload });
        },
        deleteUser: (state, action) => {
            state.allUserData = state.allUserData.filter(user => user.id !== action.payload)
            console.log({ data: JSON.stringify(state.allUserData), payload: action.payload })
        },
        editUser: (state, action) => {

            const editedUserIndex = state.allUserData.findIndex(user => user.id === action.payload.id);
            console.log({ editedUserIndex, payload: action.payload.data })
            if (editedUserIndex !== -1) {
                // If the user is found, updating the data
                state.allUserData[editedUserIndex] = action.payload.data;
                toast.success("User details successfully updated!")
            } else {
                toast.error("Updating error!")
            }
        }

    }
});

export const { setUsersData, addUser, deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
