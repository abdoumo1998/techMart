"use server"
import { getUserToken } from "../utlits/utlits";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1/wishlist";

export type WishlistProduct = {
  id: string;
  title: string;
  imageCover: string;
  price: number;
  brand?: { name: string };
};

export async function getWishlist(): Promise<WishlistProduct[]> {
  const token = await getUserToken();
  const res = await fetch(BASE_URL, {
    headers: { token: token as string },
    cache: "no-store",
    next: { tags: ["wishlist"] },
  });
  const json = await res.json();
  if (!res.ok || !json?.data) return [];
  return json.data as WishlistProduct[];
}

export async function addToWishlist(productId: string): Promise<boolean> {
  const token = await getUserToken();
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
    body: JSON.stringify({ productId }),
  });
  return res.ok;
}

export async function removeFromWishlist(productId: string): Promise<boolean> {
  const token = await getUserToken();
  const res = await fetch(`${BASE_URL}/${productId}`, {
    method: "DELETE",
    headers: { token: token as string },
  });
  return res.ok;
}


