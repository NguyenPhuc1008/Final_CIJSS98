import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({ handleLogout }) => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-[rgba(0,0,0,0.6)] text-white border rounded-lg shadow-lg z-100">
            <ul className="py-1">
                <Link to="/profile">
                    <li className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer z-100 ">
                        Profile
                    </li>
                </Link>
                <li className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer z-100">
                    <Link to="/settings">Settings</Link>
                </li>
                <li className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer z-100"
                    onClick={handleLogout} >
                    Logout
                </li>
            </ul>
        </div>
    )
}
export default DropDown
