"use server";

import { revalidatePath } from "next/cache";
import Product from "../../../database/product.model";
import { connectToDatabase } from "../mongoose";
import { ProductSchema } from "../types";
import { GetProductsParams, GetProductsParamsById } from "./shared.types";

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

export async function deleteProduct(params: any) {
  try {
    connectToDatabase();
    const { productId } = params;

    await Product.findByIdAndDelete(productId);

    revalidatePath("/");
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getProducts(params: GetProductsParams) {
  try {
    connectToDatabase();

    const { query, filter } = params;

    let filterQuery = {};

    if (query) {
      filterQuery = {
        title: {
          $regex: query,
          $options: "i",
        },
      };
    }

    if (filter) {
      filterQuery = {
        ...filterQuery,
        category: {
          $in: filter,
        },
      };
    }

    const products = await Product.find(filterQuery);

    return { products };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
