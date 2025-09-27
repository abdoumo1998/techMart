"use server"
// import { cartResponseType } from "../cart/page";
import { carttypes } from "../_intefaces/cart";
import { getUserToken } from "../utlits/utlits";




export async function getUserCart():Promise<carttypes>{

       const token= await getUserToken()
         
         const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
           headers:{
             token:token as string
           },
           cache:"force-cache",
           next:{tags:['getUserCart']}
           
         })
    
         const final = await res.json()
         console.log("Cart response:", final);
    
         if (!final.data || !final.data.products) {
           return { numOfCartItems: 0, totalCartPrice: 0, products: []  }
         }
    
         const {numOfCartItems , data:{totalCartPrice , products},cartId } = final
    
         return {numOfCartItems, totalCartPrice , products , cartId}
    
      }

