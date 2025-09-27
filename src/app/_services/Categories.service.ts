import { categorytype } from '../_intefaces/product';

export default async function getAllCategories():Promise<null | categorytype[]> {

  try{
     const res= await fetch("https://ecommerce.routemisr.com/api/v1/categories")
     const finalres= await res.json();
     console.log("finalres",finalres);
     return finalres.data
     



  }catch(err){
    console.log(err);
    return null
    

  }
 
}




