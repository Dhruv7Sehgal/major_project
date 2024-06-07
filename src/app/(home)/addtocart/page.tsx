"use client";

import useCartStore from "@/app/cartStore";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MinusIcon } from "lucide-react";
import Image from "next/image";

export default function AddToCart() {
  const { cart, removeProduct, incrementQuantity, decrementQuantity } =
    useCartStore();

  return (
    <div className="grid md:grid-cols-[1fr_300px] gap-8 max-w-6xl mx-auto my-12 px-4">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Review and complete your order
            </p>
          </div>
        </div>
        <div className="border shadow-sm rounded-lg p-4 md:p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] hidden md:table-cell">
                  Image
                </TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* <TableRow>
                <TableCell className="hidden md:table-cell">
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.svg"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Acme Hoodie</TableCell>
                <TableCell className="text-right">
                  <Select>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">$59.00</TableCell>
                <TableCell className="text-right">$59.00</TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost">
                    <TrashIcon className="w-5 h-5" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </TableCell>
              </TableRow> */}

              {cart.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="hidden md:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={item.thumbnail || "/placeholder.svg"}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>

                  <TableCell className="text-right">
                    ${item.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeProduct(item._id)}
                    >
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {cart.length > 0 && (
          <div className="border shadow-sm rounded-lg p-4 md:p-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div>
                  $
                  {cart
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>Shipping</div>
                <div>$10.00</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Tax</div>
                <div>$20.00</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-bold">
                <div>Total</div>
                <div>
                  $
                  {(
                    cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    ) + 30
                  ).toFixed(2)}
                </div>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </div>
        )}
      </div>
      <div className="border shadow-sm rounded-lg p-4 md:p-6">
        <div className="grid gap-4">
          <h2 className="text-xl font-bold">Products</h2>
          <div className="grid gap-4">
            {/* <div className="flex items-center gap-4">
              <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
              />
              <div>
                <div className="font-medium">Acme Joggers</div>
                <div className="text-gray-500 dark:text-gray-400">$49.00</div>
              </div>
              <Button size="icon" variant="ghost">
                <PlusIcon className="w-5 h-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
              />
              <div>
                <div className="font-medium">Acme Beanie</div>
                <div className="text-gray-500 dark:text-gray-400">$24.99</div>
              </div>
              <Button size="icon" variant="ghost">
                <PlusIcon className="w-5 h-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
            </div> */}

            {cart.map((item) => (
              <div key={item._id} className="flex items-center gap-4">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={item.thumbnail || "/placeholder.svg"}
                  width="64"
                />
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    ${item.price}
                  </div>
                </div>
                <Button
                  onClick={() => incrementQuantity(item._id)}
                  size="icon"
                  variant="ghost"
                >
                  <PlusIcon className="w-5 h-5" />
                  <span className="sr-only">Add to cart</span>
                </Button>
                <Button
                  onClick={() => decrementQuantity(item._id)}
                  size="icon"
                  variant="ghost"
                >
                  <MinusIcon className="w-5 h-5" />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function PrinterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
