import React, { useState } from 'react'
import ImgLogin from '../assets/login/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa6'
import { notification } from 'antd'

const SignupPage = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const singUp = (e) => {
        if (validate()) {
            e.preventDefault();
            validate()
            fetch("http://localhost:8888/user", {
                method: "POST",
                body: JSON.stringify(
                    {
                        id: email,
                        name: name,
                        pass: pass
                    }
                )
            }).then(() => {
                notification.success({
                    message: 'Success',
                    description: 'Account registration successful.'
                })
                navigate('/login')
            }).catch(() => {
                alert('Fail')
            })
        }
    }
    const validate = () => {
        let rs = true;
        if (email === '' || email === null && pass === '' || pass === null &&
            name === '' || name === null

        ) {
            rs = false;
            alert('Please Enter Username and Password and Name !')
        }
        return rs
    }
    return (
        <div>
            <div className='mt-2'>
                <div className='container'>
                    <div className='border-b pb-3'>
                        <p className='text-gray-500 text-xl'>Home - SignUp</p>
                    </div>
                    <div className='w-full h-screen flex items-start pt-20'>
                        <div className='w-1/2 h-full flex flex-col'>
                            <img src={ImgLogin} alt="" className='w-full h-full' />
                        </div>
                        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                            <form className='flex justify-start flex-col w-full px-40' onSubmit={singUp}>
                                <div className='flex flex-col gap-4 pb-4'>
                                    <h1 className='text-4xl font-semibold'>Create an account</h1>
                                    <p className='text-md'>Enter your details below</p>
                                </div>
                                <div className='flex flex-col'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        className='border-b border-gray-300 py-3 my-2 w-full outline-none focus:border-black'
                                        value={name}
                                        onChange={e => setName(e.target.value)}

                                    />
                                    <input
                                        type='email'
                                        placeholder='Email or Phone Number'
                                        className='border-b border-gray-300 py-3 my-2 w-full outline-none focus:border-black'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        className='border-b border-gray-300 py-3 my-2 w-full outline-none focus:border-black'
                                        value={pass}
                                        onChange={e => setPass(e.target.value)}
                                    />
                                </div>
                                <div className='flex justify-between items-center pt-10 w-full flex-col gap-3'>
                                    <button className='bg-primary text-white py-3 px-10 rounded-md hover:bg-slate-950 w-full'>Log In</button>
                                    <button className='bg-white text-black border border-gray-300 py-3 px-10 rounded-md w-full 
                                    flex justify-center items-center'><FaGoogle size={20} className='mr-2' />Sign up with Google</button>


                                </div>
                                <div className='flex justify-center pt-10'>
                                    <p className='text-lg text-gray-400'>Already have account? <Link to='/login' className='text-blue-700 underline underline-offset-2 ml-1'>Log in</Link></p>


                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SignupPage
