// "use server"
// import { revalidateTag } from "next/cache";
// import { addToWishlist, removeFromWishlist } from "../../_services/wishlist.service";

// export async function addToWishlistAction(productId: string) {
//   await addToWishlist(productId);
//   revalidateTag("wishlist");
// }

// export async function removeFromWishlistAction(productId: string) {
//   await removeFromWishlist(productId);
//   revalidateTag("wishlist");
// }


"use server"
import { revalidateTag } from "next/cache";
import { addToWishlist, removeFromWishlist } from "../../_services/wishlist.service";

export async function addToWishlistAction(productId: string) {
  try {
    await addToWishlist(productId);
    await revalidateTag("wishlist");
  } catch (err) {
    console.error("Error adding to wishlist:", err);
    throw err;
  }
}

export async function removeFromWishlistAction(productId: string) {
  try {
    await removeFromWishlist(productId);
    await revalidateTag("wishlist");
  } catch (err) {
    console.error("Error removing from wishlist:", err);
    throw err;
  }
}
