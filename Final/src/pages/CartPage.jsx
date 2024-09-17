import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartData);
        calculateTotalQuantity(cartData)
    }, [])
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
    const calculateTotalQuantity = (cartItems) => {
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(total);
    };

    const handleQuantityChange = (productId, action) => {
        const updateCart = cartItems.map(item => {
            if (item.id === productId) {
                if (action === 'increase') {
                    return { ...item, quantity: item.quantity + 1 }

                } else if (action === 'decrease' && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
            }
            return item
        })
        setCartItems(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart))
        const event = new Event('storage');
        window.dispatchEvent(event);
        calculateTotalQuantity(updateCart)
    }
    const handleRemoveItem = (id) => {
        const updateCart = cartItems.filter(item => item.id !== id);
        setCartItems(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart))
        const event = new Event('storage');
        window.dispatchEvent(event);
        calculateTotalQuantity(updateCart)
    }
    const handleCheckOutItem = () => {
        if (cartItems.length > 0) {
            localStorage.removeItem('buy')
            localStorage.setItem('buy', JSON.stringify(cartItems));
            localStorage.removeItem('cart')
            const event = new Event('storage');
            window.dispatchEvent(event);
            navigate('/payment')

        }

    }
    if (cartItems.length === 0) {
        return <div className="justify-center flex items-center pt-10">
            <p className='text-3xl font-semibold text-gray-600'>Your cart is empty. </p>

        </div>
    }
    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='border-b pb-3'>
                    <p className='text-gray-500 text-xl'>Home - Cart</p>
                </div>
                <div className='mt-5'>
                    <div className='mb-5 text-center'>
                        <h1 className='text-2xl font-bold'>Your Shopping Cart</h1>
                        <h3 className='text-xl text-gray-500'>({totalQuantity} items)</h3>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        {
                            cartItems.map(item => (
                                <div className='grid grid-cols-5 border p-4 rounded-lg items-center gap-5' key={item.id}>
                                    <div className='flex items-center gap-1'>
                                        <img src={item.img[0]} alt="" className='w-32 h-32 object-cover mr-4' />
                                        <h2 className='text-lg font-semibold text-gray-600 '>{item.name}</h2>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p>${item.price}</p>
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <button className='bg-gray-200 py-1 px-3 rounded-lg'
                                            onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                                        <span className='mx-4'>{item.quantity}</span>
                                        <button className='bg-gray-200 py-1 px-3 rounded-lg'
                                            onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>

                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-gray-600'>$ {item.price * item.quantity}</p>
                                    </div>
                                    <button className='text-primary flex justify-center' onClick={() => handleRemoveItem(item.id)}><FaRegTrashAlt size={30} /></button>
                                </div>

                            ))
                        }
                    </div>
                    <div className='mt-5 flex justify-end'>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-xl font-bold'>Total: ${getTotalPrice().toFixed(2)}</h2>
                            <div>
                                <button className='bg-primary text-white px-6 py-2 rounded-xl'
                                    onClick={handleCheckOutItem}>CheckOut</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartPage
