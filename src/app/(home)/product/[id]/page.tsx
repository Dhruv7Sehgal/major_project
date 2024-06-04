import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/actions/product.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productpage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const product = await getProductById({
    productId: params.id,
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="grid gap-6 md:gap-10 items-start order-2 md:order-1">
          <div className="hidden md:flex items-start">
            <div className="grid gap-6">
              <div className="grid gap-4">
                <h1 className="font-bold text-4xl">{product?.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-6 h-6 fill-primary" />
                    <StarIcon className="w-6 h-6 fill-primary" />
                    <StarIcon className="w-6 h-6 fill-primary" />
                    <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400"></div>
                </div>
              </div>
              <div className="grid gap-4 text-lg leading-relaxed">
                <p>{product?.description}</p>
              </div>
            </div>
            <div className="text-4xl font-bold ml-auto">${product?.price}</div>
          </div>
          <div className="grid gap-6 md:gap-10">
            <div className="grid gap-4">
              <h2 className="font-bold text-2xl">Product Specifications</h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 fill-primary" />
                  <span>60% combed ringspun cotton, 40% polyester</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 fill-primary" />
                  <span>Machine washable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 fill-primary" />
                  <span>Prism-inspired pattern design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 fill-primary" />
                  <span>Relaxed fit</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h2 className="font-bold text-2xl">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="grid gap-4 group">
                  <Link
                    className="aspect-[3/4] relative block overflow-hidden rounded-lg"
                    href="#"
                  >
                    <Image
                      alt="Related Product"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      height={600}
                      src={product?.thumbnail}
                      style={{
                        aspectRatio: "450/600",
                        objectFit: "cover",
                      }}
                      width={450}
                    />
                  </Link>
                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg">
                      CottonSculpt Prism Hoodie
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-2xl">$399</span>
                      <span className="text-gray-500 line-through">$499</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 group">
                  <Link
                    className="aspect-[3/4] relative block overflow-hidden rounded-lg"
                    href="#"
                  >
                    <Image
                      alt="Related Product"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      height={600}
                      src={product?.thumbnail}
                      style={{
                        aspectRatio: "450/600",
                        objectFit: "cover",
                      }}
                      width={450}
                    />
                  </Link>
                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg">
                      CottonSculpt Prism Sweatpants
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-2xl">$299</span>
                      <span className="text-gray-500 line-through">$399</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 group">
                  <Link
                    className="aspect-[3/4] relative block overflow-hidden rounded-lg"
                    href="#"
                  >
                    <Image
                      alt="Related Product"
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      height={600}
                      src={product?.thumbnail}
                      style={{
                        aspectRatio: "450/600",
                        objectFit: "cover",
                      }}
                      width={450}
                    />
                  </Link>
                  <div className="grid gap-2">
                    <h3 className="font-semibold text-lg">
                      CottonSculpt Prism Shorts
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-2xl">$199</span>
                      <span className="text-gray-500 line-through">$299</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 items-start order-1">
          <div className="flex md:hidden items-start">
            <div className="grid gap-6">
              <div className="grid gap-4">
                <h1 className="font-bold text-3xl">{product?.title}</h1>
                <div>
                  <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-6 h-6 fill-primary" />
                    <StarIcon className="w-6 h-6 fill-primary" />
                    <StarIcon className="w-6 h-6 fill-primary" />
                    <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    4.2 out of 5 (23 reviews)
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold ml-auto">$299</div>
            </div>
          </div>
          <div className="grid gap-6">
            <Image
              alt="Product Image"
              className="aspect-[3/4] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={800}
              src={product?.thumbnail}
              width={600}
            />
            <div className="flex flex-col gap-4">
              <Button size="lg">Add to Cart</Button>
              <Button size="lg" variant="outline">
                <HeartIcon className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          
    </svg>
  );
}

export default Productpage;
