'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { createCashOrder, createCheckOutSession } from './order.actions'
import { getUserCart } from '@/app/_services/cart.service'
import { toast } from 'sonner'
import { cartContext } from '@/app/_components/MySessionProvider/cartContext'
import { useRouter } from 'next/navigation'



export default function Payment() {

  const {updateCartCount} = useContext(cartContext);
  const router = useRouter();


  const cityInput = useRef<HTMLInputElement>(null)
  const phoneInput = useRef<HTMLInputElement>(null)
  const detailsInput = useRef<HTMLInputElement>(null)
  const [cartId, setCartId] = useState<null | string>(null)
  const [totalCartPrice, setTotalCartPrice] = useState<number | null>(null)
  const [numOfCartItems, setNumOfCartItems] = useState<number | null>(null)

  async function handleGettingUserCart(){
     const  res =  await getUserCart()
     setCartId(res.cartId)
     setTotalCartPrice(res.totalCartPrice)
     setNumOfCartItems(res.numOfCartItems)
  }

  useEffect(function(){
    handleGettingUserCart()
  },[])


   async function makeCashOrder(){

     
    const address ={
      
      details: detailsInput.current?.value || '',
      phone : phoneInput.current?.value || '',
     city: cityInput.current?.value || ''
    }

    const isSuccessed = await createCashOrder( cartId || "", address );
    if(isSuccessed){
      toast.success("order created successfully");  
     updateCartCount(0);
    //  reset form 
    if (cityInput.current) cityInput.current.value = "";
    if (phoneInput.current) phoneInput.current.value = "";
    if (detailsInput.current) detailsInput.current.value = "";
    // Navigation
    setTimeout(() => {
    router.push("/");
    }, 1000);



    }else{
      toast.error("error occuerrd while creating order")
    }

  }



  async function makeOnlineOrder(){
      const address ={
      
      details: detailsInput.current?.value || '',
      phone : phoneInput.current?.value || '',
     city: cityInput.current?.value || ''
    }






    const res = await createCheckOutSession(cartId || '',address )

    if(res == false){
      toast.error("error")
    }
    else{

      window.open(res ,"_self")


    }

  }









  return (
    <>
    <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-1/2 mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Card */}
        <div className="md:col-span-2 order-2 md:order-none">
          <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-5 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Payment</h1>

            <div className="space-y-4">
              <div>
                <label className="block text-base sm:text-lg font-medium mb-1">City</label>
                <Input
                  ref={cityInput}
                  placeholder="Enter your city"
                  className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-medium mb-1">Phone</label>
                <Input
                  ref={phoneInput}
                  type='tel'
                  placeholder="Enter your phone number"
                  className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-medium mb-1">Address details</label>
                <Input
                  ref={detailsInput}
                  placeholder="Street name, building, apartment..."
                  className="mt-1 w-full px-3 py-2 text-sm sm:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-3">
              <Button onClick={makeCashOrder} size="lg" className="w-full md:w-auto py-2 sm:py-3 text-sm sm:text-base font-semibold bg-blue-600 hover:bg-blue-700">
                Pay Cash
              </Button>
              <Button onClick={makeOnlineOrder} size="lg" variant="outline" className="w-full md:w-auto py-2 sm:py-3 text-sm sm:text-base font-semibold">
                Pay Online
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="md:col-span-1 order-1 md:order-none">
          <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-5 sm:p-6 md:p-8 md:sticky md:top-6">
            <h2 className="text-xl font-semibold mb-4">Order summary</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Items</span>
              <span className="text-lg font-bold">{numOfCartItems ?? '-'}</span>
            </div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-gray-600">Total</span>
              <span className="text-lg font-bold">{totalCartPrice ? `${totalCartPrice}$` : '-'}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
