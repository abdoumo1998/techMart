'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { verifyResetCodeAction } from './server.action'

const schema = z.object({
  resetCode: z.string().min(4, 'Enter the code we sent')
})

type ResetForm = z.infer<typeof schema>

export default function ResetCodePage() {
  const router = useRouter()
  const search = useSearchParams()
  const email = search.get('email') || ''
  const form = useForm<ResetForm>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: ResetForm) => {
    const res = await verifyResetCodeAction(data)
    if (res === true) {
      toast.success('Code verified, please set a new password')
      const next = email ? `/reset-password?email=${encodeURIComponent(email)}` : '/reset-password'
      router.push(next)
    } else if (typeof res === 'string') {
      toast.error(res)
    } else {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-1/2 mx-auto my-8 p-4 sm:p-6 md:p-8 border border-gray-300 rounded-lg shadow-2xl bg-white">
      <h1 className="text-center font-bold text-2xl sm:text-3xl">Verify Reset Code</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
          <FormField
            control={form.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reset Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Verify Code</Button>
        </form>
      </Form>
    </div>
  )
}


