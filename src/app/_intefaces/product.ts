export type productType = {
    _id: string;
    title:string;
    description:string;
    price:number;
    imageCover:string;
    images:string[];
    category:categorytype;
    brand:brandtype;
    ratingsAverage:number;
    ratingsQuantity: number;
    sold: number;
    priceAfterDiscount?:number;
    id:string;
    quantity:number;
    createdAt: string;
  updatedAt: string;
 

}



export type categorytype = {
    _id:string;
    slug:string;
    name:string;
    image:string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export type brandtype = {
    _id:string;
    slug:string;
    name:string;
    image:string;
}



