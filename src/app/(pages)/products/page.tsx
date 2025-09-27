import React from 'react'
import { getAllProducts } from '../../_services/products.service'
import ProductSearchContainer from '../../_components/productSearch/ProductSearchContainer'

export default async function ProductPage() {
     const allProduct = await getAllProducts()
  
  return (
    <>
      {allProduct && <ProductSearchContainer products={allProduct} />}
    </>
  )
}
