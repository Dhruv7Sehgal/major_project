"use client";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Component() {
  return (
    <section className="w-full">
      <div className="">
        <Carousel
          className="rounded-xl overflow-hidden"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                alt="Slide 1"
                className="object-cover w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]"
                height="500"
                src="/images/banner0.jpg"
                width="800"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Slide 2"
                className="object-cover w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]"
                height="500"
                src="/images/banner1.jpg"
                width="800"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Slide 3"
                className="object-cover w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]"
                height="500"
                src="/images/banner2.jpg"
                width="800"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Slide 4"
                className="object-cover w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]"
                height="500"
                src="/images/banner.jpg"
                width="800"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Slide 5"
                className="object-cover w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10]"
                height="500"
                src="/images/banner.jpg"
                width="800"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-gray-50 hover:text-gray-200 focus:text-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300 sm:left-6 md:left-8">
            <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Previous</span>
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-gray-50 hover:text-gray-200 focus:text-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-300 sm:right-6 md:right-8">
            <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="sr-only">Next</span>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}

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
