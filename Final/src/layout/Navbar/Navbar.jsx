import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa"
import { notification } from 'antd'
import DropDown from './DropDown'


const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Shop",
        link: "/shop"
    }, {
        id: 3,
        name: "About",
        link: "/about"
    }, {
        id: 4,
        name: "Log In",
        link: "/login"
    }
]
const Navbar = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [user, setUser] = useState({})
    const [dropdownOpen, setDropDownOpen] = useState(false)
    const navigate = useNavigate();

    const getUserFromStorage = () => {
        const userData = JSON.parse(localStorage.getItem('user')) || {}
        setUser(userData)
    }

    useEffect(() => {
        getUserFromStorage();
        const handleStorageChange = () => {
            getUserFromStorage()
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {

            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser({})
        notification.success({
            message: 'Success',
            description: `Log out success`
        })
        navigate("/login")
        setDropDownOpen(false)
    };

    const handleDropDownOpen = () => {
        setDropDownOpen((pre) => !pre)
    };
    const calculateTotalQuantity = (cartItems) => {
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(total);
    };
    useEffect(() => {
        const updateQuantity = () => {
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
            calculateTotalQuantity(cartData);
        };
        updateQuantity();
        const handleCartChange = () => {
            updateQuantity();
        };
        window.addEventListener('storage', handleCartChange);
        return () => {
            window.removeEventListener('storage', handleCartChange);
        };
    }, []);

    const filteredMenuLinks = user.name
        ? MenuLinks.filter((link) => link.name !== 'Log In') : MenuLinks

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Link section */}
                    <div className='flex items-center gap-4'>
                        <Link to={"/"} className="text-primary font-semibold tracking-widest
          text-2xl uppercase sm:text-3xl">PSHOP</Link>
                        {/* Menu Items */}
                        <div className='hidden sm:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    filteredMenuLinks.map((data) => (
                                        <li key={data.id}>
                                            <Link to={data.link}
                                                onClick={() => getMenuId(data.id)}

                                                className='inline-block px-4 font-semibold text-gray-500 hover:text-black'>{data.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar section */}
                        <div className='relative group hidden sm:block' >
                            <input type="text" placeholder='Search'
                                className='search-bar'
                            />
                            <IoMdSearch
                                className='text-xl text-gray-600 group-hover:text-primary duration-200
                                absolute top-1/2 -translate-y-1/2 right-3' size={25} />
                        </div>
                        <Link to={"/cart"}>
                            <button className='relative p-3'>
                                <FaCartShopping size={25} className='text-gray-600' />
                                {totalQuantity > 0 && (<div className='w-4 h-4 bg-red-500 text-white rounded-full 
                            absolute top-0 right-0 flex items-center justify-center text-sx'>{totalQuantity}</div>)}

                            </button>
                        </Link>
                        {
                            user.name && (
                                <div className='relative'>
                                    <div className='flex items-center gap-2 border border-gray-300 rounded-full p-2 cursor-pointer'
                                        onClick={handleDropDownOpen} >
                                        <FaUserCircle size={25} />
                                        <p>{user.name}</p>
                                    </div>
                                    {
                                        dropdownOpen && <DropDown handleLogout={handleLogout} />
                                    }
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
