// import { NextAuthOptions } from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import {jwtDecode} from "jwt-decode"
// import { AuthUser } from './interface';

// // type MyToken = {
// //   credentialsToken?: string;
// //   // أضف أي خصائص أخرى متوقعة هنا
// // };


// export const nextAuthConfig: NextAuthOptions  = {


//     providers:[
//         Credentials({
//             name: 'Fresh Cart',

//           authorize:async function( credentials ):Promise<AuthUser|null>{
//             // console.log( "credentials",credentials);
            
//           const res = await  fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",
//                 {
//                     method:'POST',
//                     body:JSON.stringify(credentials),
//                     headers:{'Content-Type':'application/json'}
                       
//           }
          
//         )
//           const finalRes = await res.json();
//           // console.log("finalres auth",finalRes);

//           if(finalRes.message == "success"){

//             // const{ role , ...rest}= finalRes.user
//             // return rest
//             const deCodedObj:{id:string} = jwtDecode(finalRes.token)

//             return {
//               id:deCodedObj.id,
//               email:finalRes.user.email,
//               name:finalRes.user.name,
//               credentialsToken: finalRes.token


//             }

//           }
//           return null
//         } ,
      
//         credentials:{
//           email:{type:'email',  },
//           password:{type:'password'  }
//                 }
      
// })
    
          
//     ],

//     pages:{
//         signIn:'/login'
//     },

//     callbacks:{
      
//       jwt(params) {
//         if(params.user){
//           (params.token as any).credentialsToken = (params.user as any).credentialsToken
//         }
//         return params.token
//       },

//       session(params){
//         return params.session
//       }
//     },

    


    

  




 

//     session: {
//       maxAge: 60 * 60 * 24 * 7
//     },
//     secret: process.env.NEXTAUTH_SECRET




// }



import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { jwtDecode } from "jwt-decode";
import { AuthUser } from './interface';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';

// تعريف الـ types
interface MyToken extends JWT {
  credentialsToken?: string;
}

interface DecodedToken {
  id: string;
}

interface LoginResponse {
  message: string;
  token: string;
  user: {
    email: string;
    name: string;
  };
}

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Fresh Cart',
      authorize: async function(credentials): Promise<AuthUser | null> {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        });
        
        const finalRes: LoginResponse = await res.json();
        
        if (finalRes.message === "success") {
          const deCodedObj: DecodedToken = jwtDecode(finalRes.token);
          return {
            id: deCodedObj.id,
            email: finalRes.user.email,
            name: finalRes.user.name,
            credentialsToken: finalRes.token
          } as AuthUser;
        }
        return null;
      },
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    jwt({ token, user }): JWT {
      if (user) {
        (token as MyToken).credentialsToken = (user as AuthUser & { credentialsToken?: string }).credentialsToken;
      }
      return token;
    },
    session({ session }): Session {
      return session;
    }
  },
  session: {
    maxAge: 60 * 60 * 24 * 7
  },
  secret: process.env.NEXTAUTH_SECRET
};



