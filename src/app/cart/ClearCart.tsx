// 'use client'
// import { Button } from '@/components/ui/button'
// import React, { useContext } from 'react'
// import { clearCart } from './cart.actions'
// import { toast } from 'sonner'
// import { cartContext } from '../_components/MySessionProvider/cartContext'

// export default function ClearCart() {
//         const {updateCartCount} = useContext(cartContext)
    

//   async function  handleClearCart(){
//        const output = await clearCart()

//         if(output === null){
//             toast.error("error occuerrd please try again")
//         }else{
//             toast.success(`product count is:${newCount}` );
//             updateCartCount(output)

//         }


//   }
//   return (
//     <>
//             <Button onClick={handleClearCart}>Clear All</Button>

//     </>
//   )
// }
