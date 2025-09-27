import React, { lazy, Suspense } from 'react'
import { getAllProducts } from './_services/products.service';
import HomeSlider from './_components/HomeSlider/HomeSlider';
import ProductSearchContainer from './_components/productSearch/ProductSearchContainer';
import Loader from './_components/loading/loading';


// streeming => lazy loading => suspense

const CategorySlider = lazy(()=>import('./_components/categorySlider/CategorySlider'))


export default async function Home() {



   const allProduct =await getAllProducts()


  return (


    <>

    <div className='' >
    
      
    <HomeSlider/>
    

    <div className=' '>
      <Suspense fallback={<Loader type="orbit" />}>
    <CategorySlider/>

      </Suspense>

    </div>

    </div>


   



    {/* Products with Search */}
    <div className='my-7'>
    {allProduct && <ProductSearchContainer products={allProduct} />}

    </div>


    </>




    
      
    


  )
}
