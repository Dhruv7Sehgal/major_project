import { Schema } from "mongoose";

export interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface GetProductsParams {
  query?: string | string[] | undefined;
  page?: number;
  filter?: string | string[] | undefined;
}

export interface GetProductsParamsById {
  productId: string | Schema.Types.ObjectId;
}
