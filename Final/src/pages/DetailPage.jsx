import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom'
import { notification } from 'antd'

const DetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8888/product/${productId}`)
            .then((res) => {
                setProduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [productId]);
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productInCart = cart.find(item => item.id === product.id);
        if (productInCart) {
            productInCart.quantity += amount;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: amount,
                img: product.img
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        const event = new Event('storage');
        window.dispatchEvent(event);
        notification.success({
            message: 'Success',
            description: `${product.name} has been added to the cart.`
        })
    };
    const handleBuyNow = () => {
        const buy = JSON.parse(localStorage.getItem('buy')) || [];
        const productInPay = buy.find(item => item.id === product.id);
        if (productInPay) {
            productInPay.quantity += amount;
        } else {
            buy.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: amount,
                img: product.img
            })
        }
        localStorage.setItem('buy', JSON.stringify(buy));
        navigate('/payment')
    }

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='border-b pb-3'>
                    <p className='text-gray-500 text-xl'>Home - Shop - Detail</p>
                </div>
                <div className='pt-8' key={product.id}>
                    <div className='flex flex-row items-center justify-between gap-16'>
                        <div className='flex flex-col gap-6 w-2/4'>
                            <div className='mx-auto'>
                                {
                                    <img src={product.img[currentIndex]}
                                        className='w-[500px] h-full aspect-square object-cover' />
                                }
                            </div>
                            <div className='flex flex-row justify-between gap-4 pt-4' >
                                {
                                    product.img.map((p, index) => (
                                        <div key={index} className={`border p-4 rounded-lg cursor-pointer 
                                        ${currentIndex === index ? "border-black" : " border-gray-200"}`} >
                                            <img src={p} onClick={() => setCurrentIndex(index)}
                                                className='w-30 h-30 rounded-md ' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-2/4'>
                            <div>
                                <h1 className='text-3xl font-bold'>
                                    {product.name}
                                </h1>
                            </div>
                            <div className='flex space-x-2 items-center'>
                                <div className='flex space-x-1 text-amber-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='text-gray-400'>(150 Reviews)</p>
                            </div>
                            <p className='text-gray-600'>{product.description}</p>

                            <h6 className='text-2xl font-semibold'><span className='mr-1'>$</span>{product.price * amount}</h6>
                            <div className='border-b-2 border-gray-300'></div>
                            <div className='flex flex-row items-center '>
                                <button className='bg-gray-200 py-1 px-5 rounded-lg text-3xl'
                                    onClick={() => setAmount((pre) => (isNaN(pre) || pre <= 1 ? 1 : pre - 1))}>-</button>
                                <span className='py-1 px-8 rounded-lg '>{amount}</span>
                                <button className='bg-gray-200 py-1 px-4 rounded-lg text-3xl'
                                    onClick={() => setAmount((pre) => pre + 1)} >+</button>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <button className='bg-primary text-white rounded-full px-6 py-2'
                                    onClick={handleBuyNow}>
                                    Buy Now
                                </button>
                                <button className='bg-black text-white rounded-full px-4 py-2'
                                    onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailPage
