import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getWishlist } from '@/app/_services/wishlist.service'
import { removeFromWishlistAction } from '@/app/(pages)/wishlist/wishlist.actions'

export default async function WishlistPage() {
  const items = await getWishlist();

  return (
    <div className="w-11/12 md:w-10/12 lg:w-3/4 mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

      {items.length === 0 ? (
        <p className="text-muted-foreground">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.id} className="border rounded-lg bg-white shadow-sm overflow-hidden">
              <div className="relative w-full aspect-square bg-white">
                <Image
                  src={p.imageCover}
                  alt={p.title}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                  <Link href={`/productDetails/${p.id}`}>{p.title}</Link>
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{p.price}$</span>
                  <form action={async () => { 'use server'; await removeFromWishlistAction(p.id); }}>
                    <Button variant="outline" size="sm">Delete</Button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


