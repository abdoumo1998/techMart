
import React from 'react'
import LoginForm from './LoginForm'
import Link from 'next/link'

export default function Login() {
 

//   {
//     "name": "Ahmed Abd Al-Muti",
//     "email":"ahmedmuttii4012@gmail.com",
//     "password":"Ahmed@123",
//     "rePassword":"Ahmed@123",
//     "phone":"01010700701"
// }

  return (
    <>
   
   
   
   
    <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-1/2 mx-auto my-8 p-4 sm:p-6 md:p-8 border border-gray-300 rounded-lg shadow-2xl bg-white">
      {/* address */}
      <h1 className="text-center font-bold text-2xl sm:text-3xl">
        Login with your TechMart
      </h1>

      {/* Form */}
      <div className="mt-6">
        <LoginForm />
      </div>

      {/*  link */}
      <p className="mt-6 text-center text-sm sm:text-base text-gray-600">
        Don’t have an account?{" "}
        <Link
          href="./register"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </div>


    
    </>
  )
}
