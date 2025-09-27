'use client'

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './register.schema';
import { RegisterFormType } from './register.type';
import { handleRegister } from './action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



// {مدير امن سكيورتي في البنك المصري}



export default function RegisterForm() {
   
  const router = useRouter()


     const Rhfobj =useForm({
        resolver:zodResolver(schema)
     });
  const {control , handleSubmit} = Rhfobj;

  async function mySubmit(data:RegisterFormType){
    // console.log("data", data);

   const resOutput = await handleRegister(data);

  if(resOutput === true){
   toast.success("Registered successfully , you can login now" , {duration:4000,position:"top-right"})
   router.push("/login")
  }else{

    toast.error(resOutput ,{duration:4000,position:"top-right"})
   }

     

  }
  return (
    <>
     <Form  {...Rhfobj}  >
        <form
      onSubmit={handleSubmit(mySubmit)}
      className="sm:py-5"
    >
            
  <FormField 
   control={control}
   name="name"
   render={({field}) => (
     <FormItem className="mb-4">
       <FormLabel className="text-base sm:text-lg font-medium">Username</FormLabel>
       <FormControl>
         <Input
           {...field}
           placeholder="Enter your username..."
           className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </FormControl>
       <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
     </FormItem>
   )}
  />
  <FormField
    control={control}
    name="email"
    render={({field}) => (
     <FormItem className="mb-4">
       <FormLabel className="text-base sm:text-lg font-medium">Email</FormLabel>
       <FormControl>
         <Input
           {...field}
           placeholder="Enter your email..."
           type="email"
           className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </FormControl>
       <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
      </FormItem>
    )}
  />
  <FormField
    control={control}
    name="password"
    render={({field}) => (
     <FormItem className="mb-4">
       <FormLabel className="text-base sm:text-lg font-medium">Password</FormLabel>
       <FormControl>
         <Input
           {...field}
           placeholder="Enter your password..."
           type="password"
           className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </FormControl>
       <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
      </FormItem>
    )}
  />
  <FormField
    control={control}
    name="rePassword"
    render={({field}) => (
     <FormItem className="mb-4">
       <FormLabel className="text-base sm:text-lg font-medium">Confirm Password</FormLabel>
       <FormControl>
         <Input
           {...field}
           placeholder="Confirm your password..."
           type="password"
           className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </FormControl>
       <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
      </FormItem>
    )}
  />
  <FormField
    control={control}
    name="phone"
    render={({field}) => (
     <FormItem className="mb-4">
       <FormLabel className="text-base sm:text-lg font-medium">Phone</FormLabel>
       <FormControl>
         <Input
           {...field}
           placeholder="Enter your phone..."
           type="tel"
           className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </FormControl>
       <FormMessage className="text-xs sm:text-sm text-red-500 mt-1" />
      </FormItem>
    )}
  />
  <Button type="submit" className="w-full py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors mt-2">Register</Button>
  <div className="mt-4 text-center text-sm sm:text-base text-gray-600">
    Already have an account?{' '}
    <Link href="/login" className="text-blue-600 hover:underline font-medium">Log in</Link>
  </div>
  
        </form>

</Form>


    </>
  )
}
