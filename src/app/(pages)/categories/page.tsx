// import React from 'react'
// import getAllCategories from '../../_services/Categories.service'
// import { categorytype } from '../../_intefaces/product';
// import Link from 'next/link'
// import Image from 'next/image';
// import { ChevronRight } from 'lucide-react'



// async function getSubcategoriesByCategory(categoryId: string){
//   try{
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories?category=${categoryId}`, { cache: 'no-store' })
//     if(!res.ok) return [] as Array<{ _id: string; name: string; slug: string }>
//     const json = await res.json()
//     return (json?.data ?? []) as Array<{ _id: string; name: string; slug: string }>
//   }catch{
//     return []
//   }
// }

// export default async function AllCategories({ searchParams  }: { searchParams?: { category?: string } }) {


//  const allCategory = await getAllCategories()
// //  console.log("allCategory", allCategory);
 

//   const selectedCategoryId = searchParams?.category
//   const subcategories = selectedCategoryId ? await getSubcategoriesByCategory(selectedCategoryId) : []

//   return (
//   <>


// <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4'>
//   {allCategory?.map((category: categorytype) => (
//     <div className='flex justify-center' key={category._id}>
//       <div className='
//         bg-white 
//         rounded-xl 
//         shadow-md 
//         overflow-hidden 
//         hover:shadow-xl 
//         transition-all 
//         duration-300 
//         transform 
//         hover:-translate-y-1 
//         w-full 
//         max-w-xs
//         border 
//         border-gray-100
//       '>
//         <div className='p-4 flex flex-col items-center'>
//           <div className='
//             relative 
//             w-40 
//             h-40 
//             md:w-48 
//             md:h-48 
//             lg:w-52 
//             lg:h-52 
//             mb-4 
//             overflow-hidden 
//             rounded-lg
//           '>
//             <Image 
//               src={category.image}
//               alt={category.name}
//               fill
//               loading="lazy"
//               sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 13rem, 13rem"
//               className='
//                 object-cover 
//                 transition-transform 
//                 duration-300 
//                 hover:scale-110
//               '
//             />
//           </div>
//           <h2 className='
//             text-lg 
//             font-semibold 
//             text-gray-800 
//             text-center 
//             mb-2 
//             px-2 
//             line-clamp-2
//             hover:text-blue-600 
//             transition-colors 
//             duration-200
//           '>
//             {category.name}
//           </h2>
//           <Link href={`/categories?category=${category._id}`} className='
//             mt-2 
//             px-4 
//             py-2 
//             bg-blue-500 
//             text-white 
//             rounded-lg 
//             hover:bg-blue-600 
//             transition-colors 
//             duration-200 
//             text-sm 
//             md:text-base
//           '>
//             Show Products
//           </Link>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//  {selectedCategoryId && (
//    <div className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-10'>
//      <h2 className='text-xl font-semibold mb-4'>Subcategories</h2>
//      {subcategories.length === 0 ? (
//        <p className='text-muted-foreground'>No subcategories found.</p>
//      ) : (
//        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//          {subcategories.map((sc) => (
//            <div
//              key={sc._id}
//              className='
//                group relative cursor-default select-none
//                rounded-xl border ring-1 ring-gray-100
//                bg-white p-5
//                transition-all duration-300
//                hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200
//                hover:bg-gradient-to-br from-white to-blue-50
//              '
//            >
//              <div className='flex items-start justify-between gap-3'>
//                <p className='font-semibold text-gray-800 transition-colors group-hover:text-blue-700'>
//                  {sc.name}
//                </p>
//                <ChevronRight className='h-4 w-4 text-gray-300 opacity-0 transition-all group-hover:opacity-100 group-hover:text-blue-500 group-hover:translate-x-1' />
//              </div>
//              <p className='mt-1 text-xs text-muted-foreground'>{sc.slug}</p>

//              <div className='absolute inset-x-0 bottom-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-transparent via-blue-400 to-transparent' />
//            </div>
//          ))}
//        </div>
//      )}
//    </div>
//  )}

   
//   </>
//   )
// }


// import React from 'react'
// import getAllCategories from '../../_services/Categories.service'
// import { categorytype } from '../../_intefaces/product';
// import Link from 'next/link'
// import Image from 'next/image';
// import { ChevronRight } from 'lucide-react'



// async function getSubcategoriesByCategory(categoryId: string){
//   try{
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories?category=${categoryId}`, { cache: 'no-store' })
//     if(!res.ok) return [] as Array<{ _id: string; name: string; slug: string }>
//     const json = await res.json()
//     return (json?.data ?? []) as Array<{ _id: string; name: string; slug: string }>
//   }catch{
//     return []
//   }
// }

// export default async function AllCategories({ searchParams  }: { searchParams?: { category?: string } }) {


//  const allCategory = await getAllCategories()
// //  console.log("allCategory", allCategory);
 

//   const selectedCategoryId = searchParams?.category
//   const subcategories = selectedCategoryId ? await getSubcategoriesByCategory(selectedCategoryId) : []

//   return (
//   <>


// <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4'>
//   {allCategory?.map((category: categorytype) => (
//     <div className='flex justify-center' key={category._id}>
//       <div className='
//         bg-white 
//         rounded-xl 
//         shadow-md 
//         overflow-hidden 
//         hover:shadow-xl 
//         transition-all 
//         duration-300 
//         transform 
//         hover:-translate-y-1 
//         w-full 
//         max-w-xs
//         border 
//         border-gray-100
//       '>
//         <div className='p-4 flex flex-col items-center'>
//           <div className='
//             relative 
//             w-40 
//             h-40 
//             md:w-48 
//             md:h-48 
//             lg:w-52 
//             lg:h-52 
//             mb-4 
//             overflow-hidden 
//             rounded-lg
//           '>
//             <Image 
//               src={category.image}
//               alt={category.name}
//               fill
//               loading="lazy"
//               sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 13rem, 13rem"
//               className='
//                 object-cover 
//                 transition-transform 
//                 duration-300 
//                 hover:scale-110
//               '
//             />
//           </div>
//           <h2 className='
//             text-lg 
//             font-semibold 
//             text-gray-800 
//             text-center 
//             mb-2 
//             px-2 
//             line-clamp-2
//             hover:text-blue-600 
//             transition-colors 
//             duration-200
//           '>
//             {category.name}
//           </h2>
//           <Link href={`/categories?category=${category._id}`} className='
//             mt-2 
//             px-4 
//             py-2 
//             bg-blue-500 
//             text-white 
//             rounded-lg 
//             hover:bg-blue-600 
//             transition-colors 
//             duration-200 
//             text-sm 
//             md:text-base
//           '>
//             Show Products
//           </Link>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//  {selectedCategoryId && (
//    <div className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-10'>
//      <h2 className='text-xl font-semibold mb-4'>Subcategories</h2>
//      {subcategories.length === 0 ? (
//        <p className='text-muted-foreground'>No subcategories found.</p>
//      ) : (
//        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//          {subcategories.map((sc) => (
//            <div
//              key={sc._id}
//              className='
//                group relative cursor-default select-none
//                rounded-xl border ring-1 ring-gray-100
//                bg-white p-5
//                transition-all duration-300
//                hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200
//                hover:bg-gradient-to-br from-white to-blue-50
//              '
//            >
//              <div className='flex items-start justify-between gap-3'>
//                <p className='font-semibold text-gray-800 transition-colors group-hover:text-blue-700'>
//                  {sc.name}
//                </p>
//                <ChevronRight className='h-4 w-4 text-gray-300 opacity-0 transition-all group-hover:opacity-100 group-hover:text-blue-500 group-hover:translate-x-1' />
//              </div>
//              <p className='mt-1 text-xs text-muted-foreground'>{sc.slug}</p>

//              <div className='absolute inset-x-0 bottom-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-transparent via-blue-400 to-transparent' />
//            </div>
//          ))}
//        </div>
//      )}
//    </div>
//  )}

   
//   </>
//   )
// }



// app/(pages)/categories/page.tsx
import React from 'react';
import getAllCategories from '../../_services/Categories.service';
import { categorytype } from '../../_intefaces/product';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// ===== Types =====
type PageProps = {
  searchParams?: { category?: string };
};

// ===== Fetch subcategories =====
async function getSubcategoriesByCategory(categoryId: string) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/subcategories?category=${categoryId}`,
      { cache: 'no-store' }
    );
    if (!res.ok) return [] as Array<{ _id: string; name: string; slug: string }>;
    const json = await res.json();
    return (json?.data ?? []) as Array<{ _id: string; name: string; slug: string }>;
  } catch {
    return [];
  }
}

// ===== Page Component =====
export default async function AllCategories({ searchParams }: PageProps) {
  const allCategory = await getAllCategories();

  const selectedCategoryId = searchParams?.category;
  const subcategories = selectedCategoryId
    ? await getSubcategoriesByCategory(selectedCategoryId)
    : [];



  return (
    <>
      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {allCategory?.map((category: categorytype) => (
          <div className="flex justify-center" key={category._id}>
            <div
              className="
                bg-white rounded-xl shadow-md overflow-hidden 
                hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-1 w-full max-w-xs 
                border border-gray-100
              "
            >
              <div className="p-4 flex flex-col items-center">
                <div
                  className="
                    relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 
                    mb-4 overflow-hidden rounded-lg
                  "
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 13rem, 13rem"
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h2
                  className="
                    text-lg font-semibold text-gray-800 text-center 
                    mb-2 px-2 line-clamp-2 hover:text-blue-600 
                    transition-colors duration-200
                  "
                >
                  {category.name}
                </h2>
                <Link
                  href={`/categories?category=${category._id}`}
                  className="
                    mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg 
                    hover:bg-blue-600 transition-colors duration-200 
                    text-sm md:text-base
                  "
                >
                  Show Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subcategories */}
      {selectedCategoryId && (
        <div className="w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-10">
          <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
          {subcategories.length === 0 ? (
            <p className="text-muted-foreground">No subcategories found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {subcategories.map((sc) => (
                <div
                  key={sc._id}
                  className="
                    group relative cursor-default select-none 
                    rounded-xl border ring-1 ring-gray-100 
                    bg-white p-5 transition-all duration-300 
                    hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200 
                    hover:bg-gradient-to-br from-white to-blue-50
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-gray-800 transition-colors group-hover:text-blue-700">
                      {sc.name}
                    </p>
                    <ChevronRight className="h-4 w-4 text-gray-300 opacity-0 transition-all group-hover:opacity-100 group-hover:text-blue-500 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{sc.slug}</p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
