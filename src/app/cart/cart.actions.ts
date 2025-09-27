'use server'
import { getUserToken } from '@/utlits/utlits';
import { count } from 'console';
import { revalidatePath, revalidateTag } from 'next/cache';
import { json } from 'zod';


export  async function addProductToCart(productId:string) {

     const token =  await getUserToken();

     if(token){


       const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
      method:"POST",
      body: JSON.stringify({productId}),
      headers:{
        "content-type":"application/json",
        token: token as string
    
        
      }
    }


    )
      
    const finalRes = await res.json()
    // console.log( "finalres",finalRes);

    if(finalRes.status === 'success'){
       revalidateTag('getUserCart')
      return finalRes.numOfCartItems

    }else{
      console.log("token not", token );
      
      return false
    }
    
      
     }




}
export  async function removeItemFromCard(id:string) {

     const token =  await getUserToken();

     if(token){


       const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      method:"Delete",
    
      headers:{
        "content-type":"application/json",
        token: token as string
    
        
      }
    }


    )
      
    const finalRes = await res.json()
    console.log( "finalressssss",finalRes);

    if(finalRes.status === 'success'){
       revalidateTag('getUserCart')
      return finalRes.numOfCartItems

    }else{
      console.log("token not", token );
      
      return null
    }
    
      
     }




}
















export async function changeCount(id:string, count:number){

  const token = await getUserToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      method:"Put",
      headers:{
        token: token as string,
        "Content-Type": "application/json"

      },
      body: JSON.stringify({count})
      
    }
  )

  const final = await res.json()
  console.log("finaaaaaaaaaal", final);
     if(final.status === 'success'){
       revalidateTag('getUserCart')
      return final.numOfCartItems

    }else{
      console.log("token not", token );
      
      return null
    }

  


  
}