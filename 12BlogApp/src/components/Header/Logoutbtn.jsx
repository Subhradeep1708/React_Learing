import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'



const Logoutbtn = () => {
    const dispatch = useDispatch()

    const logoutHandler = async () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <button
            onClick={logoutHandler}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
        >
            Logout
        </button>
    )
}

export default Logoutbtn
