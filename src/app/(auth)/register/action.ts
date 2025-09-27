"use server";

import { cookies } from "next/headers";
import { RegisterFormType } from "./register.type";

// any mutatation operation (post, put , delete) from the client but will be handle on the server
// secure your operation -> interface to your operation 

export async function handleRegister(data:RegisterFormType){
     try{
      
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", 
      {method:"post",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"},

      }

    )
          const resData = await res.json();
          console.log("resData",resData);
          if(resData.message === "success"){

          const cookie = await cookies();
          cookie.set("userToken", resData.token ,{httpOnly:true ,sameSite:"strict" ,maxAge:60*60*24*7}) // 20 days;

            
            return true;
            
          }else{
            return resData.message;

          }
          

  }catch(err){
    console.log("err", err);
    
  }

}