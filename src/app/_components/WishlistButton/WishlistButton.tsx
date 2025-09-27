'use client'

import { Button } from '@/components/ui/button'
import { addToWishlistAction } from '@/app/(pages)/wishlist/wishlist.actions'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

export default function WishlistButton({
  productId,
  label = 'Wishlist',
  iconOnly = false,
  className,
}: {
  productId: string
  label?: string
  iconOnly?: boolean
  className?: string
}) {
  const [added, setAdded] = useState(false)

  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    try {
      await addToWishlistAction(productId)
      setAdded(true) 
    } catch (error) {
      console.error("Error adding to wishlist ❌", error)
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant={iconOnly ? 'ghost' : 'outline'}
      size={iconOnly ? 'sm' : 'default'}
      className={`
        ${className}
        transition-colors duration-200
        ${added 
          ? 'bg-red-500 text-white hover:bg-red-600'  
          : 'hover:bg-gray-200 dark:hover:bg-gray-700'}
      `}
    >
      <Heart 
        className={`h-4 w-4 ${!iconOnly && "mr-2"} ${added ? "fill-current" : ""}`} 
      />
      {!iconOnly && (added ? "Added" : label)}
    </Button>
  )
}
