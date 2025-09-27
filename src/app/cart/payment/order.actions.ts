'use server'
import { getUserToken } from '@/utlits/utlits'
import { revalidatePath } from 'next/cache'



export type shippingAddresstype={
       details: string,
        phone: string,
        city:string 
}

export async function createCashOrder(cartId:string, shippingAddress:shippingAddresstype) {

     const token = await getUserToken()


    const res =   await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
        method:"Post",
        body:JSON.stringify({shippingAddress}),
        headers:{
            "Content-Type":"application/json",
            token:token as string
        }
    });


    const final = await res.json();
    // console.log("final oreder", final);

    if(final.status === "success"){
        revalidatePath('/cart');
        return true;
    }else{

        return false;

    }
    
    



 
}






export async function createCheckOutSession(cartId:string, shippingAddress:shippingAddresstype) {

     const token = await getUserToken()


    const res =   await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        method:"Post",
        body:JSON.stringify({shippingAddress}),
        headers:{
            "Content-Type":"application/json",
            token:token as string
        }
    });


    const final = await res.json();
    console.log("final create session", final);

    if(final.status === "success"){
        revalidatePath('/cart');
        return final.session.url;
    }else{

        return false

    }
    
    



 
}







