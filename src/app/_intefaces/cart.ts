import { productType } from "./product";

export type cartItemType = {
  count: number,
  _id: string,
  price: number,
  product: productType, // API returns 'product' not 'products'
}


export type carttypes ={
    numOfCartItems:number,
    totalCartPrice:number,
    products:cartItemType[],
    cartId:string
}

