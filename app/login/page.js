"use client"

import React, { useState, useContext } from 'react';
import Authlayouts from '@/components/layouts/authLayouts';
import  Input from '@/components/inputs/input';
import { validateEmail } from '@/utils/helper';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';
// import { UserContext } from '@/context/userContext';
import { UserContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { updateUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid Email Address');
      return;
    }

    if (!password) {
      setError('Please enter the password');
      return;
    }

    setError('');

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(user);
        router.push('/dashboard'); // ✅ Next.js router
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
        console.log(error)
      } else {
        setError('Something went wrong, please try again');
      }
    }
  };

  return (
    <Authlayouts>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to login
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label='Email Address'
            placeholder='john@example.com'
            type='text'
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label='Password'
            placeholder='••••••••'
            type='password'
          />

          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

          <button type='submit' className='btn-primary'>
            Login
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Dont have an account?{' '}
            <Link href='/signup'>
              <span className='font-medium text-purple-500 underline'>
                SignUp
              </span>
            </Link>
          </p>
        </form>
      </div>
     </Authlayouts>
  );
};

export default Login;