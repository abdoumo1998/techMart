import { productType } from "../_intefaces/product";

  export async function getAllProducts():Promise<productType[]|null> 
   {

  try{  
   const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", { cache: 'force-cache' })

    const finalRes = await res.json();

    if(!res.ok || !finalRes?.data){
      return null
    }

    return finalRes.data as productType[]

  } catch(err){
    console.log("error", err);
    return null
    
  }

   
  }



  export async function getSpecifiedDetails(id:string):Promise<productType|null>
  {

     try{  
   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, { cache:"force-cache" })

    const finalRes = await res.json();

    console.log("API Response:", { status: res.status, data: finalRes });

    if(!res.ok || !finalRes?.data){
      console.log("API Error:", { status: res.status, message: finalRes?.message });
      return null
    }

    return finalRes.data as productType

  } catch(err){
    console.log("Fetch error:", err);
    return null
    
  } 
  }