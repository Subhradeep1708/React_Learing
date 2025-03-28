import { createSlice } from '@reduxjs/toolkit'

// this slice is to check if the user is logged in or not

const initialState = {
    status: false,
    userData: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null
        },
    }
})

export const { login, logout } = authSlice.actions;
// TODO postSlice have to be made separately {ASSIGNMENT}

export default authSlice.reducer