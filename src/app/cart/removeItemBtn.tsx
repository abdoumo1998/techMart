'use client'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { removeItemFromCard } from './cart.actions'
import { toast } from 'sonner'
import { cartContext } from '../_components/MySessionProvider/cartContext'

export default function RemoveItemBtn({id}:{id:string}) {

      const{updateCartCount} =useContext(cartContext)

    async function handleRemoveItem(){
       const output =  await removeItemFromCard(id)

       if(output === null){
        toast.error("couldn't remove item , please try again", {position:"top-right",duration:3000} )
       }else{
        toast.success("product Remove successfully",{position:"top-right",duration:3000});
        updateCartCount(output)


       }

    }







  return (
    <>
    
              <Button onClick={handleRemoveItem} variant={'destructive'} className='mt-3 w-full'>Delete</Button>

    </>
  )
}
