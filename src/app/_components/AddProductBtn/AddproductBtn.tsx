'use client'
import { addProductToCart } from '@/app/cart/cart.actions';
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React, { useContext } from 'react'
import { toast } from 'sonner';
import { cartContext } from '../MySessionProvider/cartContext';

type Props = { id: string }

const AddproductBtn: React.FC<Props> = ({ id }) => {
  const {updateCartCount} = useContext(cartContext)

    async function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>){
       e.preventDefault();

       const isAddsuccessfuly = await addProductToCart(id)


       const ok = await addProductToCart(id)
       if (ok) {
         toast.success('Added to cart')
         updateCartCount(isAddsuccessfuly)
        
       } else {
         toast.error('Failed to add to cart')
       }

    }

  return (
    <>
            <Button onClick={handleAddToCart}  className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
    
    </>
  )
}

export default AddproductBtn
