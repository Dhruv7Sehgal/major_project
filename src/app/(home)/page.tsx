import React from "react";
import { cookies } from "next/headers";
import { getProducts } from "@/lib/actions/product.action";
import Products from "@/components/Products";

const Page = async () => {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get("username");
  console.log(isAdmin);
  const result = await getProducts({});

  const products = result.products;

  console.log(products);
  return (
    <div className="flex flex-wrap gap-6 w-full p-16">
      {products.map((item, key) => (
        <Products key={key} product={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};
export default Page;
