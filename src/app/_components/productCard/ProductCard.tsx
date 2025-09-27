
import React from 'react'
import { productCardProps } from './productCard.type'
import Link from 'next/link'
import { renderStars } from '@/helpers/rating'
import { formatPrice } from '@/helpers/currency'
import Image from 'next/image'
import AddproductBtn from '../AddProductBtn/AddproductBtn'
import WishlistButton from '../WishlistButton/WishlistButton'

export default function ProductCard({ product }: productCardProps) {
  return (
    <div className="group relative bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Link href={`/productDetails/${product?.id}`}>
          <Image
            src={product?.imageCover}
            alt={product?.title || 'Product'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>

        {/* Wishlist Button */}
        <WishlistButton
          productId={product?.id}
          iconOnly
          className="absolute top-2 right-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        />

        {/* Badge for sold items */}
        {product?.sold > 100 && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            Popular
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
       
         <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
          <Link
            href={`/Brand`}
            className="hover:text-primary hover:underline transition-colors"
          >
            {product?.brand?.name || 'Unknown'}
          </Link>
        </p>


        {/* Title */}
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/productDetails/${product?.id}`}>
  {product?.title?.split(" ").slice(0, 3).join(" ")}
</Link>

        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">{renderStars(product?.ratingsAverage || 0)}</div>
          <span className="text-xs text-muted-foreground">
            ({product?.ratingsQuantity || 0})
          </span>
        </div>

        {/* Category */}
          <p className="text-xs text-muted-foreground mb-2">
          <Link
            href={`/categories`}
            className="hover:text-primary hover:underline transition-colors"
          >
            {product?.category?.name || 'Uncategorized'}
          </Link>
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product?.price)}
          </span>
          <span className="text-xs text-muted-foreground">
            {product?.sold} sold
          </span>
        </div>

        {/* Add to Cart Button */}
        <AddproductBtn id={product?.id} />
      </div>
    </div>
  )
}
