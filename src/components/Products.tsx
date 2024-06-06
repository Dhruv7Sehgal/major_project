"use client";

import useCartStore from "@/app/cartStore";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/lib/actions/product.action";
import Image from "next/image";
import Link from "next/link";

export default function Products({ product, user }: any) {
  const addProduct = useCartStore((state) => state.addProduct);

  const handleDelete = async () => {
    await deleteProduct({
      productId: product._id,
    });
  };

  const username = user?.value;

  return (
    <div className="w-[250px]">
      <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
        <Link href={`product/${product._id}`}>
          <Image
            alt="Product Image"
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
            height={300}
            src={product.thumbnail}
            width={300}
          />
        </Link>

        {username === "admin" && (
          <span
            onClick={handleDelete}
            className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}

        <div className="p-4 bg-white dark:bg-gray-950">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                ${product.price}
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 line-through">
                {product.discountprice}
              </span>
            </div>

            <Button
              onClick={() => {
                addProduct(product);
              }}
              size="sm"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
