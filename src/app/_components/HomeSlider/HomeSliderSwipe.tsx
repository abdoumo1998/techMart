"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function HomeSliderSwipe( {listOfImgs,spaceBetween=10,slidesPerView=1}:
    {
        listOfImgs:string[],
        spaceBetween?:number,
        slidesPerView?:number}) {
  return (
    <div className="relative h-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: '.home-swiper-button-next',
          prevEl: '.home-swiper-button-prev',
        }}
        className='w-full h-full'
        loop
      >
        {listOfImgs.map((src, index) => (
          <SwiperSlide key={`${src}-${index}`}>
            <div className="relative w-full h-full">
              <Image 
                src={src} 
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons for Home Slider */}
      <button className="home-swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200">
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>
      
      <button className="home-swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200">
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};
