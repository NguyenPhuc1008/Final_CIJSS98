import React, { useState } from 'react'
import ImgLogin from '../assets/login/login.jpg'
import { Link, useNavigate } from 'react-router-dom'

import { notification } from 'antd'

const LoginPage = () => {
    const [email, setEmailLogin] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate()
    const ProceedLogin = (e) => {
        e.preventDefault()
        if (validate()) {
            fetch("http://localhost:8888/user/" + email).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    alert('Please Enter valid Email')
                } else {
                    if (resp.pass === pass) {
                        notification.success({
                            message: 'Success',
                            description: 'Login Successful.'
                        })
                        navigate('/')

                    } else {
                        alert('Please Enter valid credentials')
                    }
                }
            }).catch((err) => {
                alert('Login Failed' + err)
            })
            console.log('s')

        }
    }
    const validate = () => {
        let rs = true;
        if (email === '' || email === null && pass === '' || pass === null) {
            rs = false;
            alert('Please Enter Username and Password !')
        }
        return rs
    }
    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='border-b pb-3'>
                    <p className='text-gray-500 text-xl'>Home - Login</p>
                </div>
                <div className='w-full h-screen flex items-start pt-20'>
                    <div className='w-1/2 h-full flex flex-col'>
                        <img src={ImgLogin} alt="" className='w-full h-full' />
                    </div>
                    <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                        <form className='flex justify-start flex-col w-full px-40' onSubmit={ProceedLogin}>
                            <div className='flex flex-col gap-4 pb-4'>
                                <h1 className='text-4xl font-semibold'>Log in to Exclusive</h1>
                                <p className='text-md'>Enter your details below</p>
                            </div>
                            <div className='flex flex-col'>
                                <input
                                    type='email'
                                    placeholder='Email or Phone Number'
                                    className='border-b border-gray-300 py-3 my-2 w-full outline-none focus:border-black'
                                    value={email}
                                    onChange={e => setEmailLogin(e.target.value)}

                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='border-b border-gray-300 py-3 my-2 w-full outline-none focus:border-black'
                                    value={pass}
                                    onChange={e => setPass(e.target.value)}

                                />
                            </div>
                            <div className='flex justify-between items-center pt-10'>
                                <button className='bg-primary text-white py-3 px-10 rounded-md hover:bg-slate-950'>Log In</button>
                                <p className='text-primary text-md cursor-pointer hover:text-gray-600'>Forget Password?</p>

                            </div>
                            <div className='flex justify-center pt-10'>
                                <p className='text-lg text-gray-400'>Dont have a account? <Link to='/signup' className='text-blue-700 underline underline-offset-2 ml-1'>Sign Up</Link></p>


                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>


    )
}

export default LoginPage
