import { revalidatePath } from "next/cache";
import Product from "../../../database/product.model";
import { connectToDatabase } from "../mongoose";
import { GetProductsParams, GetProductsParamsById } from "./shared.types";

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

    const products = await Product.findById({ productId });

    return { products };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
