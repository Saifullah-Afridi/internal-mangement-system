import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const response = NextResponse.json({ message: "User has been logged in" });
  response.cookies.set({
    name: "token",
    value: "admin",
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60,
  });
  return response;
}
