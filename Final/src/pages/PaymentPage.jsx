import React, { useEffect, useState } from 'react'

const PaymentPage = () => {
    const [buyItems, setBuyItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('bank');


    useEffect(() => {
        const buyData = JSON.parse(localStorage.getItem('buy')) || [];
        setBuyItems(buyData)

        const total = buyData.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setSubtotal(total)
        // const handleBeforeUnload = (e) => {

        //     const message = "Are you sure you want to leave? Your order will be lost.";
        //     e.returnValue = message;
        //     return message;
        // };
        // window.addEventListener('beforeunload', handleBeforeUnload);
        // return () => {
        //     window.removeEventListener('beforeunload', handleBeforeUnload);
        // };
    }, [])

    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='border-b pb-3'>
                    <p className='text-gray-500 text-xl'>Home - Shop - Detail - Payment</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-4xl font-bold'>Billing Details</h1>
                </div>
                <div className='flex justify-between gap-4 pt-5 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <form action="" className='w-3/4 space-y-8'>
                            <input
                                type='text'
                                placeholder='First Name*'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                            <input
                                type='text'
                                placeholder='Company Name'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                            <input
                                type='text'
                                placeholder='Street Address*'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                            <input
                                type='text'
                                placeholder='Apartment, floor, etc. (optional)'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                            <input
                                type='text'
                                placeholder='Town/City*'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                            <input
                                type='number'
                                placeholder='Phone Number'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className=' bg-gray-200 rounded-lg pl-2 border-gray-300 py-3 my-2 w-full outline-none focus:bg-white focus:border-gray-500 focus:border'
                            />
                        </form>
                    </div>
                    <div className='flex flex-row w-1/2 justify-end'>
                        <div className='flex flex-col gap-8 '>
                            {
                                buyItems.map(buyItem => (

                                    <div className='grid grid-cols-3 border rounded-xl items-center' key={buyItem.id}>
                                        <div className='flex items-center flex-row gap-3 p-3'>
                                            <img src={buyItem.img[0]} alt="anh" className='w-24 h-24' />
                                            <div className='flex flex-col space-y-2'>
                                                <h1 className='font-semibold'>{buyItem.name}</h1>
                                                <h1>${buyItem.price}</h1>
                                            </div>
                                        </div>
                                        <div className='flex justify-center'>
                                            <p>{buyItem.quantity}</p>
                                        </div>
                                        <div className='flex justify-center'>
                                            <p>
                                                ${buyItem.price * buyItem.quantity}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-center border-b-2 pb-4'>
                                    <h1 className='font-semibold'>Subtotal:</h1>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                                <div className='flex justify-between items-center border-b-2 pb-4'>
                                    <h1 className='font-semibold'>Shipping:</h1>
                                    <p>Free</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h1 className='font-semibold'>Total:</h1>
                                    <p>${subtotal.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" className='size-4' name="method-payment"
                                        checked={paymentMethod === 'bank'}
                                        onChange={() => setPaymentMethod('bank')} />
                                    <label htmlFor="">Bank</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="radio" className='size-4' name="method-payment"
                                        checked={paymentMethod === 'cash'}
                                        onChange={() => setPaymentMethod('cash')} />
                                    <label htmlFor="">Cash on delivery</label>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <input
                                    type='text'
                                    placeholder='Coupon Code'
                                    className='border border-gray-300 w-[70%] rounded-lg pl-2 py-3 my-2 outline-none focus:bg-white focus:border-gray-800 focus:border'
                                />
                                <button className='bg-primary px-6 py-3 text-white rounded-lg '>
                                    Apply Coupon
                                </button>
                            </div>
                            <div>
                                <button className='bg-primary px-6 py-3 text-white rounded-lg '>
                                    Place Order
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PaymentPage
