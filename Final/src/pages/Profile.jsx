import React, { useEffect, useState } from 'react'
import imgUser from "../assets/user/user1.png"

const Profile = () => {
    const [user, setUser] = useState({})
    const getUserFromStorage = () => {
        const userData = JSON.parse(localStorage.getItem('user')) || {}
        setUser(userData)
    }
    useEffect(() => {
        getUserFromStorage()
    }, [])
    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='border-b pb-3'>
                    <p className='text-gray-500 text-xl'>Home - Profile</p>
                </div>
                <div className="flex justify-center w-full mt-8 gap-8">
                    <div className="flex flex-col items-center bg-gray-50 shadow-xl rounded-lg w-1/3 py-8 px-10">
                        <div className=' bg-gray-300 flex items-center justify-center rounded-full w-40 h-40'>
                            <img src={imgUser} alt="" className="w-32 h-32 rounded-full " />
                        </div>
                        <h2 className="mt-4 text-xl font-semibold uppercase">{user.name}</h2>
                        <p className="text-gray-500">{user.id}</p>
                        <div className="mt-4 flex flex-col space-y-4">
                            <button className="bg-white border border-gray-400 text-gray-700 px-4 py-2 rounded-lg">Silver member</button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Security</button>


                        </div>
                    </div>
                    <div className="bg-gray-100 py-8 px-10 shadow-xl rounded-lg w-1/2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Full Name</h3>
                            <p>{user.name}</p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p>{user.id}</p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p>(123) 45678</p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p>Tp.HCM</p>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-10">Edit</button>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Profile
