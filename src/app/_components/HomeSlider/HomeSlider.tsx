import React from 'react'

import Image from 'next/image'
import img1 from "@images/slider-image-1.jpeg"
import img2 from "@images/slider-image-2.jpeg"
import img3 from "@images/slider-image-3.jpeg"
import blog1 from "@images/blog-img-1.jpeg"
import blog2 from "@images/blog-img-2.jpeg"
import HomeSliderSwipe from './HomeSliderSwipe'

export default function HomeSlider() {
  return (
    <>
     <div className="w-full mx-auto my-7 px-4 sm:px-6 lg:px-10">
      <div
        className="
          flex flex-col lg:flex-row
          h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]
          gap-0
        "
      >
        {/* Main Slider */}
        <div className="w-full lg:w-2/3 h-full overflow-hidden">
          <div className="relative w-full h-full">
            <HomeSliderSwipe listOfImgs={[img1.src, img2.src, img3.src]} />
          </div>
        </div>

        {/* Side Images */}
        <div className="w-full lg:w-1/3 h-full flex flex-row lg:flex-col overflow-hidden">
          <div className="relative w-1/2 lg:w-full h-full lg:h-1/2">
            <Image
              src={blog1}
              alt="blog1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-1/2 lg:w-full h-full lg:h-1/2">
            <Image
              src={blog2}
              alt="blog2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>


    

    </>
  )
}
