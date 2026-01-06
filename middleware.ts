import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && token !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
