"use server";

import { connect } from "@/db/dbConfig";
import { signIn } from "@/lib/auth";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function signup(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return {
      message: "All fields are required!",
    };
  }

  await connect();

  const user = await User.findOne({ email });

  if (user) {
    return {
      message: "User already exists!",
    };
  }

  const hashPassword = await bcrypt.hash(password, 12);

  const users = await User.create({
    name,
    email,
    password: hashPassword,
  });

  redirect("/login");
}

export async function login(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("All fields are required!");
  }

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    return error.message;
  }
}
