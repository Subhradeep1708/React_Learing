import axios from "axios"
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/subhradeep1708')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })

    // }, [])

    const data = useLoaderData()
    return (
        <div className="text-center m-4 bg-slate-500 text-white p-6 text-2xl rounded-lg">

            <div className="flex justify-center items-center">
                <img src={data.avatar_url} alt="" className="h-64 w-64 " />
            </div>
            <div className="flex justify-between">
                {data.login}

                <a href={data.html_url} className="text-blue-400 hover:text-orange-400">Visit My Account</a>
            </div>

            Github Followers: {data.followers}
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/subhradeep1708')
    return response.json()
}