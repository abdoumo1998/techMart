'use client'

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loginschema } from './login.schema';
import { LoginFormType } from './login.type';
import { toast } from 'sonner';
import Link from 'next/link';
import { signIn } from "next-auth/react";



// {مدير امن سكيورتي في البنك المصري}



export default function LoginForm() {
     
     const Rhfobj =useForm({
        resolver:zodResolver(Loginschema)
     });
  const {control , handleSubmit} = Rhfobj;

  async function mySubmit(data:LoginFormType){

    // ... gamda bs bnsahaa
   
    const res = await signIn('credentials', {...data, redirect:false});
    console.log("res ", res);
    
    if (res?.ok){
       toast.success("welcome Back" , {duration:4000,position:"top-right"})
    // redirect to login pagae
    // router.push("./")
    window.location.href = "/"

    }else{
          toast.error("email or password is in-correct " ,{duration:4000,position:"top-right"})

    }
  

     

  }



  return (
    <>
     <Form  {...Rhfobj}  >
        <form
      onSubmit={handleSubmit(mySubmit)}
      className="sm:py-5"
    >
      {/* Email */}
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel className="text-base sm:text-lg font-medium">
              Email
            </FormLabel>
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

      {/* Password */}
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel className="text-base sm:text-lg font-medium">
              Password
            </FormLabel>
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

      {/* Remember me + Forgot password */}
      <div className="flex items-center justify-between mb-6 text-sm sm:text-base">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
          <span className="text-gray-600">Remember me</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-blue-600 hover:underline font-medium"
        >
          Forgot password?
        </Link>
      </div>

      {/* Button */}
      <Button
        type="submit"
        className="w-full py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        Login
      </Button>
    </form>
      
   


</Form>


    </>
  )
}
