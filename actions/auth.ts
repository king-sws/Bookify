"use server"

import { db } from "@/database/drizzle"
import { users } from "@/database/schema"
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"
import { headers } from "next/headers"

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import ratelimit from "@/lib/ratelimit"
import { SendWelcomeEmail } from "@/nodemailer/email"

interface FormData {
    fullName: string
    email: string
    password: string
}

export const signInWithCredentials = async (
    params: Pick<FormData, "email" | "password">,
  ) => {
    const { email, password } = params;
  
        // ratelimit
        const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1"
        const { success } = await ratelimit.limit(ip)
    
        if (!success) return redirect("/to-fast")
          
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (result?.error) {
        return { success: false, error: result.error };
      }
  
      return { success: true };
    } catch (error) {
      console.log(error, "Signin error");
      return { success: false, error: "Signin error" };
    }
  };
  

export const signUp = async (data: { 
  fullName: string; 
  email: string; 
  password: string 
}) => {
  const { fullName, email, password } = data;

  // ratelimit
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1"
  const { success } = await ratelimit.limit(ip)

  if (!success) return redirect("/to-fast")

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  if (existingUser.length > 0) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword
    })

    await signInWithCredentials({ email, password })

    // Send welcome email with proper parameter format
    await SendWelcomeEmail(email, fullName);

    return { success: true }

  } catch (error) {
    console.log(error, "Sign Up Error")
    return { success: false, error: "Sign Up Error" }
  }
}

export const logoutAction = async () => {
    await signOut();
}