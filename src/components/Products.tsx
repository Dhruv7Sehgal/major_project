import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Products({ product }: any) {
  return (
    <div className="w-[250px]">
      <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
        <Image
          alt="Product Image"
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
          height={300}
          src={product.thumbnail}
          width={300}
        />
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
                {product.price}
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 line-through">
                {product.discountprice}
              </span>
            </div>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
