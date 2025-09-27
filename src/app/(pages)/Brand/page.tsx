import React from 'react'
import { getAllBrands } from '../../_services/brand.service'
import Image from 'next/image'

export default async function Brand() {

 const allBarnds = await getAllBrands()


  return (
    <>

  

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {allBarnds?.map((brand) => (
    <div
      key={brand._id}
      className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg  transition-shadow  duration-300"
    >
      <Image
        src={brand.image}
        alt={brand.name}
        width={160}
        height={160}
        className="w-40 h-40 object-contain"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold mb-2 text-center">{brand.name}</h2>
    </div>
  ))}
</div>
    
    
    </>

)
}
