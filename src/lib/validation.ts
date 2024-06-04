import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8, "Password is too short"),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Incorrect Password"),
});

export const addProductSchema = z.object({
  title: z.string().min(5),
  description: z.string(),
  price: z.string(),
  discountPrice: z.string(),
  brand: z.string(),
  stock: z.string(),
  category: z.string(),
  thumbnail: z.string(),
});
