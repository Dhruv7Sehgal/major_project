"use server";

import { error, log } from "console";
import { connectToDatabase } from "../mongoose";
import { SignInParams, SignUpParams } from "./shared.types";
import User, { IUser } from "../../../database/user.model";
import { cookies } from "next/headers";

// export async function signUpUsers(params: SignUpParams) {
//   try {
//     connectToDatabase();

//     const { username, email, password } = params;

//     if (!username || !email || !password) {
//       throw error;
//     }

//     const existingUser: IUser | null = await User.findOne({
//       $or: [{ username }, { email }],
//     });

//     if (existingUser) throw new Error("User already exists");

//     const newUser: IUser | null = await User.create({
//       username,
//       email,
//       password,
//     });
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

export async function signUpUsers(params: SignUpParams) {
  try {
    connectToDatabase();

    const { username, email, password } = params;

    if (!username || !email || !password) {
      throw error;
    }

    const existingUser: IUser | null = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) throw new Error("The User Already Exits");

    const newUser: IUser | null = await User.create({
      username,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInUsers(params: SignInParams) {
  try {
    connectToDatabase();

    const { email, password } = params;

    const existingUser = await User.findOne({ email });

    if (!existingUser) throw error;

    if (password == existingUser.password) {
      cookies().set("username", existingUser.username);
    } else throw error("Password did not match");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getValidation() {
  return cookies().get("username");
}

export async function logOutUser() {
  return cookies().delete("username");
}
