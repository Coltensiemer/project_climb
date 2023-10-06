
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '~/components/Header';

export default function SignUp() {
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e:string) => {
  };

  const handleSubmit = (e:string) => {

  };

  return (
    <>
    <Header /> 
    <div className='flex justify-center mt-10'>
      <div className='w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-6'>Sign Up</h1>
        <form onSubmit={undefined}>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={undefined}
              className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={undefined}
              className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={undefined}
              className='mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  );
};
