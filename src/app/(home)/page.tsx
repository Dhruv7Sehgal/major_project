import React from "react";
import { cookies } from "next/headers";
import { getProducts } from "@/lib/actions/product.action";
import Products from "@/components/Products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const Page = async () => {
  const cookieStore = cookies();
  const user = cookieStore.get("username");
  const result = await getProducts({});

  const products = result.products;

  console.log(products);

  function ChevronLeftIcon(props: any) {
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
        <path d="m15 18-6-6 6-6" />
      </svg>
    );
  }

  function ChevronRightIcon(props: any) {
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
        <path d="m9 18 6-6-6-6" />
      </svg>
    );
  }

  return (
    <>
      <div>
        <section className="w-full overflow-hidden">
          <Carousel className="relative w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
                  <Image
                    src="/images/product1.jpg"
                    width={1920}
                    height={1080}
                    alt="Hero Image"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 md:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      Discover the Latest Fashion Trends
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 sm:text-xl md:text-2xl">
                      Explore our curated collection of stylish apparel and
                      accessories.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
                  <Image
                    src="/images/product2.jpg"
                    width={1920}
                    height={1080}
                    alt="Hero Image"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 md:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      Elevate Your Style with Our Collection
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 sm:text-xl md:text-2xl">
                      Discover timeless pieces that will make you feel confident
                      and stylish.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
                  <Image
                    src="/images/product3.jpg"
                    width={1920}
                    height={1080}
                    alt="Hero Image"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 md:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      Effortless Style for Every Occasion
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 sm:text-xl md:text-2xl">
                      Find the perfect outfit for any event, from casual to
                      formal.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus-visible:ring-gray-300">
              <ChevronLeftIcon className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus-visible:ring-gray-300">
              <ChevronRightIcon className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </section>
        <div className="flex flex-wrap gap-6 w-full p-16">
          {products.map((item, key) => (
            <Products
              user={user}
              key={key}
              product={JSON.parse(JSON.stringify(item))}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Page;
