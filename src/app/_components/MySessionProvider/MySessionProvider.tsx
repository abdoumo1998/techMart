'use client';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';
import { CartContextProvider } from './cartContext';

export default function MySessionProvider({children}:{children: ReactNode}) {
  return (

    <SessionProvider>
      <CartContextProvider>

      {children}
      </CartContextProvider>
   
    </SessionProvider>
  )


}
