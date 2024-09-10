import React from 'react'
import Heading from '../Shared/Heading'
import BlogData from './BlogData'


const Blogs = () => {
    return (
        <div className='my-12'>
            <div className="container">
                {/* Header section */}
                <Heading title="Recent News"
                    sub="Explore Our Blogs"></Heading>
                {/* Blog section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
                    gap-y-8 sm:gap-4 md:gap-7'>
                    {
                        BlogData.map((data) => (
                            <div key={data.title}>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={data.img} alt=""
                                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-105
                                    duration-500'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-gray-500 text-xs'>{data.published}</p>
                                    <p className='font-bold line line-clamp-1'>{data.title}</p>
                                    <p className='line-clamp-2 text-sm text-gray-600'>{data.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Blogs
