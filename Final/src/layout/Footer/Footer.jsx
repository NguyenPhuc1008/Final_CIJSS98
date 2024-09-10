import React from 'react'
import { FaLinkedin, FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLocationArrow } from 'react-icons/fa6'

const footerLink = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop"
    }, {
        id: 3,
        name: "Contact",
        link: "/#about"
    }, {
        id: 4,
        name: "Blog",
        link: "/#blog"
    }
]

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a href="#" className="text-primary font-semibold tracking-widest
          text-2xl uppercase sm:text-3xl">PSHOP</a>
                        <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Voluptatibus voluptas vero adipisci?</p>
                        <p className='text-gray-500 mt-4 '>Made with by The Coding Journey</p>
                    </div>
                    {/* Footer link */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 '>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    footerLink.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 hover:text-black
                                            duration-300'>
                                                {data.name}
                                            </a>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    footerLink.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 hover:text-black
                                            duration-300'>
                                                {data.name}
                                            </a>

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Go Vap, TP.HCM</p>
                                </div>
                                <div className='flex items-center gap-3 mt-6'>
                                    <FaMobileAlt />
                                    <p>+84 961861039</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#"><FaInstagram className='text-3xl hover:text-primary duration-300' /></a>
                                <a href="#"><FaFacebook className='text-3xl hover:text-primary duration-300' /></a>
                                <a href="#"><FaLinkedin className='text-3xl hover:text-primary duration-300' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
