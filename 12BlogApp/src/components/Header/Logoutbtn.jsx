import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


const LogoutBtn = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <button
            onClick={logoutHandler}
            className='inline-block  hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full duration-200'
        >
            Logout
        </button>
    )
}

export default LogoutBtn
