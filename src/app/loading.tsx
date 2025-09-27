// import React from 'react'

import Loader from "./_components/loading/loading";

// export default function loading() {
//   return (
//     <>
//     <div className='h-screen flex justify-center items-center'>
//         <i className='fa-solid fa-spinner fa-spin fa-10x'></i>

//     </div>
//     </>
//   )
// }


export default function Page() {
  
    return <Loader type="spinner"  />;

}
