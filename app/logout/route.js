import { signOut } from "@/app/_lib/auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  await signOut({ redirect: false });

  const url = new URL("/", request.url);
  return NextResponse.redirect(url);
}
