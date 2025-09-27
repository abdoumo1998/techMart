import { brandtype } from "../_intefaces/product";

  
  
  export async function getAllBrands():Promise<null | brandtype[]> {
    try{
         const res= await fetch("https://ecommerce.routemisr.com/api/v1/brands")
            const finalres= await res.json();
            console.log("finalres",finalres);
            return finalres.data
    }catch(err){
        console.log(err);
        
       return null
        
    }

   }