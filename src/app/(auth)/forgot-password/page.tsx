'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { forgotPasswordAction } from './server.action'

const schema = z.object({
  email: z.string().email('Invalid email')
})

type ForgotForm = z.infer<typeof schema>

export default function ForgotPasswordPage() {
  const router = useRouter()
  const form = useForm<ForgotForm>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: ForgotForm) => {
    const res = await forgotPasswordAction(data)
    if (res === true) {
      toast.success('We sent a reset code to your email')
      router.push(`/reset-code?email=${encodeURIComponent(data.email)}`)
    } else if (typeof res === 'string') {
      toast.error(res)
    } else {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-1/2 mx-auto my-8 p-4 sm:p-6 md:p-8 border border-gray-300 rounded-lg shadow-2xl bg-white">
      <h1 className="text-center font-bold text-2xl sm:text-3xl">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Send Reset Code</Button>
        </form>
      </Form>
    </div>
  )
}


