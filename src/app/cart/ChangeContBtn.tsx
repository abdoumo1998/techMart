'use client'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { changeCount } from './cart.actions'
import { toast } from 'sonner'
import { cartContext } from '../_components/MySessionProvider/cartContext'

export default function ChangeContBtn({isIncrement = false , id , newCount}:{isIncrement?:boolean ,newCount:number, id:string}) {
   

     
    const {updateCartCount} = useContext(cartContext)



    async function handlechangeCount(){



        const output = await changeCount(id,newCount)

        console.log("oooout" , output);
        

        if(output === null){
            toast.error("error occuerrd please try again")
        }else{
            toast.success(`product count is:${newCount}` );
            updateCartCount(output)

        }

    }
  return (
    <>
                <Button onClick={handlechangeCount}  disabled={newCount == 0}>
                    {isIncrement ? "+" : "-"}
                </Button>

    </>
  )
}
