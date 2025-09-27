import AddproductBtn from '@/app/_components/AddProductBtn/AddproductBtn'
import { getSpecifiedDetails } from '@/app/_services/products.service'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import WishlistButton from '@/app/_components/WishlistButton/WishlistButton'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { renderStars } from '@/helpers/rating'
import { formatPrice } from '@/helpers/currency'
type productDetailsProps={
    params:{id:string}
}

export default async function productDetails({params}:productDetailsProps) {

 const product = await getSpecifiedDetails(params.id)
    
  if(!product){
    return (
      <div className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-10'>
        <h1 className='text-xl font-semibold'>Product not found</h1>
        <p className='text-muted-foreground mt-2'>The product you are looking for may be unavailable.</p>
      </div>
    )
  }
    
  return (
    
    <div className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-8 sm:py-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
      <div>
        <div className='relative w-full overflow-hidden rounded-lg bg-white'>
          <div className='relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[1/1] bg-gray-50'>
            <Image
              src={product.imageCover}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-snug'>{product.title}</h1>
        <div className='flex items-center gap-2 mb-2 sm:mb-3'>
          <div className='flex'>{renderStars(product.ratingsAverage)}</div>
          <span className='text-xs sm:text-sm text-muted-foreground'>({product.ratingsQuantity})</span>
        </div>
        <p className='text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed'>{product.description}</p>

        <div className='mb-3 sm:mb-4'>
          <span className='text-base sm:text-lg font-semibold text-gray-800'>Price: </span>
          {product.priceAfterDiscount ? (
            <>
              <span className='line-through me-2 text-gray-500'>{formatPrice(product.price)}</span>
              <span className='text-green-600 font-bold'>{formatPrice(product.priceAfterDiscount)}</span>
            </>
          ) : (
            <span className='font-bold text-blue-700'>{formatPrice(product.price)}</span>
          )}
        </div>

        <div className='grid grid-cols-1 gap-2 text-sm mb-5 sm:mb-6'>
          <div>
            <span className='text-gray-800 font-semibold'>Brand: </span>
            <Link href={'/Brand'} className='text-blue-700 font-medium hover:underline'>{product.brand.name}</Link>
          </div>
          <div>
            <span className='text-gray-800 font-semibold'>Category: </span>
            <Link href={'/categories'} className='text-blue-700 font-medium hover:underline'>{product.category.name}</Link>
          </div>
          <div>
            <span className='text-gray-800 font-semibold'>Sold: </span>
            <span className='text-blue-700 font-medium'>{product.sold}</span>
          </div>
          <div>
            <span className='text-gray-800 font-semibold'>In Stock: </span>
            <span className='text-blue-700 font-medium'>{product.quantity}</span>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-3'>
          <AddproductBtn id={product.id}/>
          <WishlistButton productId={product.id} />
        </div>

      </div>
    </div> 
 
     
   
  
  )
}
