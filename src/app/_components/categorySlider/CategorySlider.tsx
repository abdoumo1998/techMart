import getAllCategories from '@/app/_services/Categories.service'
import React from 'react'
import MySwipe from '../mySwipe/MySwipe'

export default async function CategorySlider() {
    const allCategory = await getAllCategories()

    if(allCategory === null){
        return
    }
  return (
    
    <div >
        <MySwipe slidesPerView={7} listOfImgs={allCategory?.map(category => category.image)}/>
    </div>
  )
}
