import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookiesStored = await cookies();
  cookiesStored.delete("token");
  return NextResponse.json("You have been logout");
}
