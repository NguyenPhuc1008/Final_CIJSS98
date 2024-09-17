import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '../components/HomePage/Shared/Button'
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom'
// import { useSearch } from '../context/SearchContext';

const ShopPage = () => {
    const [categorys, setCategorys] = useState([])
    const [categoryId, setCategoryId] = useState(0)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const { searchQuery } = useSearch();

    useEffect(() => {
        const fetchCategorys = async () => {
            try {
                const res = await axios.get('http://localhost:8888/category');
                setCategorys(res.data)
            } catch (err) {
                setError('Failed to load category')
                console.error(err)
            }
        };
        fetchCategorys();
    }, []);


    const getCategoryId = (id) => {
        setCategoryId(id)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:8888/product');
                if (categoryId === 0) {
                    setProducts(res.data);
                }
                else {
                    const filteredProducts = res.data.filter(
                        (p) => p.category_id === categoryId
                    );
                    setProducts(filteredProducts)
                }

            } catch (err) {
                setError('Failed to load products');
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts();
    }, [categoryId]);

    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='border-b pb-3'>
                    <p className='text-gray-500 text-xl'>Home - Shop</p>
                </div>
                <div className='mt-6 flex gap-4'>
                    <div className='w-1/5 border rounded shadow-md h-screen'>
                        <div className='flex items-center justify-start pl-4 '>
                            <BiMenu size={30} />
                            <h1 className='text-2xl font-bold uppercase p-2'>Category</h1>
                        </div>
                        <ul>
                            {
                                categorys.map((cat) => (

                                    <li key={cat.category_id}
                                        onClick={() => getCategoryId(cat.category_id)}
                                        style={
                                            categoryId === cat.category_id ? {
                                                backgroundColor: 'black',
                                                color: 'white'
                                            } : {}
                                        }
                                        className='py-2 pl-6 text-lg hover:bg-slate-100 cursor-pointer text-gray-600'>
                                        {cat.category_name}

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='w-4/5 px-4 pl-10 rounded-md'>
                        {
                            loading ? (
                                <div className='flex justify-center items-center '>
                                    <p className='text-3xl'>Loading Products ...</p>
                                </div>

                            ) : error ? (
                                <p className='text-red-500'>{error}</p>
                            ) : (
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                                    {/* card section */}
                                    {
                                        products.map((pro) => (
                                            <div className='group shadow-md rounded-md' key={pro.id}>
                                                <div className='relative'>
                                                    <img src={pro.img[0]} alt=""
                                                        className='[h-200px] w-[320px] object-cover
                            rounded-md pt-2'  />
                                                    <div className='hidden group-hover:flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2
                            left-1/2 h-full w-full text-center group-hover:backdrop-blur-sm
                            justify-center items-center duration-200'>
                                                        <Link to={`/shop/${pro.id}`}>
                                                            <Button text={'Add to cart'}
                                                                bgColor={'bg-primary'}
                                                                textColor={'text-white'} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='leading-7 text-center'>
                                                    <h2 className='font-semibold'>{pro.name}</h2>
                                                    <h2 className='font-bold'>${pro.price}</h2>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage
