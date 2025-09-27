// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default function MySwipe( {listOfImgs,spaceBetween=10,slidesPerView=1}:
//     {
//         listOfImgs:string[],
//         spaceBetween?:number,
//         slidesPerView?:number}) {
//   return (
//     <Swiper
//       spaceBetween={spaceBetween}
//       slidesPerView={slidesPerView}
//       className='w-full  my-3'
//       loop
      
//     //   onSlideChange={() => console.log('slide change')}
//     //   onSwiper={(swiper) => console.log(swiper)}
//     >

//         {listOfImgs.map(src=> <SwiperSlide key={src}>
//             <img src={src} className='w-full h-[450px]' />

//         </SwiperSlide>)}
//       {/* <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ... */}
//     </Swiper>
//   );
// };


"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'

export default function MySwipe({
  listOfImgs,
  spaceBetween = 10,
  slidesPerView = 1,
}: {
  listOfImgs: string[]
  spaceBetween?: number
  slidesPerView?: number
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className="w-full my-3"
      loop
       speed={1200}
      autoplay={{
        delay: 1000, 
        disableOnInteraction: false, 
      }}
       breakpoints={{
    320: { slidesPerView: 2 },   // mobile
    640: { slidesPerView: 3 },   // small screens
    768: { slidesPerView: 4 },   // tablet
    1024: { slidesPerView: 6 },  // labtop
    1280: { slidesPerView: 7 },   //xlg
  }}
      modules={[Autoplay]}
    >
      {listOfImgs.map((src) => (
        <SwiperSlide key={src}>
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <Image
              src={src}
              alt="slider image"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 80vw, 
                     70vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
