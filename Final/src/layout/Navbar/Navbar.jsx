import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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


    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Link section */}
                    <div className='flex items-center gap-4'>
                        <Link href="#" className="text-primary font-semibold tracking-widest
          text-2xl uppercase sm:text-3xl">PSHOP</Link>
                        {/* Menu Items */}
                        <div className='hidden sm:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    MenuLinks.map((data) => (
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
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search'
                                className='search-bar' />
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
