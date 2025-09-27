
import React from 'react'
import RegisterForm from './RegisterForm'

export default function Register() {
 

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
        Create your TechMart account
      </h1>

      {/* Form */}
      <div className="mt-6">
        <RegisterForm/>
      </div>
    </div>
    
    </>
  )
}
