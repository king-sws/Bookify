// app/api/auth/imagekit/route.ts
import { NextResponse } from "next/server";
import { getImageKitAuthParams } from "@/lib/imagekit";

export async function GET() {
  try {
    const authParams = getImageKitAuthParams();
    return NextResponse.json(authParams);
  } catch (error) {
    console.error("ImageKit auth error:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Authentication failed" }, 
      { status: 500 }
    );
  }
}