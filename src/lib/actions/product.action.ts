"use server";

import { connectToDatabase } from "../mongoose";
import { GetProductsParams, GetProductsParamsById } from "./shared.types";
import Product from "../../../database/product.model";
import { ProductSchema } from "../types";
import { revalidatePath } from "next/cache";

export async function getProducts(params: GetProductsParams) {
  try {
    connectToDatabase();

    const products = await Product.find({});

    return { products };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProductById(params: GetProductsParamsById) {
  try {
    connectToDatabase();

    const { productId } = params;

    const product: ProductSchema | null = await Product.findById(productId);

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addProduct(params: any) {
  try {
    connectToDatabase();

    const {
      title,
      thumbnail,
      description,
      price,
      discountPrice,
      brand,
      stock,
      category,
    } = params;

    await Product.create({
      title,
      description,
      price: Number(price),
      discountPrice: Number(discountPrice),
      brand,
      thumbnail,
      stock,
      category,
    });

    revalidatePath("/");
  } catch (err) {
    console.log(err);
    throw err;
  }
}
