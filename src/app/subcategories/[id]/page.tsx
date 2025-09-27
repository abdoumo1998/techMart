import React from 'react'

type Props = { params: { id: string } }

async function getSubcategory(id: string){
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`, { cache: 'no-store' })
    if(!res.ok) return null
    const json = await res.json()
    return json?.data ?? null
  }catch{
    return null
  }
}

export default async function SubcategoryPage({ params }: Props) {
  const data = await getSubcategory(params.id)
  if(!data){
    return (
      <div className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-10'>
        <h1 className='text-xl font-semibold'>Subcategory not found</h1>
      </div>
    )
  }

  return (
    <div className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-10'>
      <h1 className='text-2xl font-bold mb-2'>{data.name}</h1>
      <p className='text-muted-foreground'>Slug: {data.slug}</p>
      <p className='text-muted-foreground'>Category Id: {data.category}</p>
    </div>
  )
}


