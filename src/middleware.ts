import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const res: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const pathname = req.nextUrl.pathname;

  if (!res?.user?.email && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
