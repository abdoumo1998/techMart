import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cartItemType, carttypes } from '../_intefaces/cart';
import { getUserCart } from '../_services/cart.service';
import RemoveItemBtn from './removeItemBtn';
import ChangeContBtn from './ChangeContBtn';
import Image from 'next/image';
import Link from 'next/link';




export default async function CartPage() {

  
  async function handlegetUserCart():Promise<carttypes>{

    const res = await getUserCart();

    return res;

  }


  const {numOfCartItems,totalCartPrice,products} = await handlegetUserCart();


    if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-semibold mb-3">🛒 Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link href="/products">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (


<>
 <div className="w-full px-4 md:px-10">

      {/* Layout: Items (left) + Summary card (right) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Items List */}
        <div className="order-2 md:order-none md:col-span-2">
          {/* Mobile & Tablet View */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {products.map((item: cartItemType) => (
              <div key={item._id} className="border rounded-lg p-4 shadow-sm flex flex-col bg-white">
                <div className="relative w-full h-48 mb-3 bg-white rounded-md">
                  <Image
                    src={item.product.imageCover}
                    alt={item.product.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="font-semibold text-center mb-2">{item.product.title}</h3>
                <p className="text-center font-bold mb-3">{item.price}$</p>
                <div className="flex justify-center items-center gap-3 mb-3">
                  <ChangeContBtn isIncrement id={item.product.id} newCount={item.count + 1} />
                  <Input
                    className="w-14 h-10 text-center font-bold text-base"
                    value={item.count}
                    readOnly
                  />
                  <ChangeContBtn id={item.product.id} newCount={item.count - 1} />
                </div>
                <div className="flex justify-center">
                  <RemoveItemBtn id={item.product.id} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block w-full">
            <Table>
              <TableCaption>Your cart items</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Product</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-center">Amount</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((item: cartItemType) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-md">
                          <Image
                            src={item.product.imageCover}
                            alt={item.product.title}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <h3 className="font-medium">{item.product.title}</h3>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-bold">{item.price}$</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2 items-center">
                        <ChangeContBtn isIncrement id={item.product.id} newCount={item.count + 1} />
                        <Input
                          className="w-12 h-9 text-center font-bold"
                          value={item.count}
                          readOnly
                        />
                        <ChangeContBtn id={item.product.id} newCount={item.count - 1} />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <RemoveItemBtn id={item.product.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Summary Card (right on desktop, first on mobile) */}
        <div className="order-1 md:order-none md:col-span-1">
          <div className="border rounded-lg shadow-sm p-5 bg-white md:sticky md:top-6">
            <h1 className="text-2xl font-bold mb-4">User Cart</h1>
            <h2 className="text-xl font-semibold mb-3">You will pay</h2>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total</span>
              <span className="text-lg font-bold">{totalCartPrice}$</span>
            </div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-gray-600">Items</span>
              <span className="text-lg font-bold">{numOfCartItems}</span>
            </div>
            <Link href='/cart/payment' className="block">
              <Button className="w-full py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700">Pay now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
</>


)
}
