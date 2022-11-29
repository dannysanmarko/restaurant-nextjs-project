import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: any) {
  const jwt = request.cookies.get("tokenUser");

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  // this condition avoid to show the login page if the user is logged in
  if (jwt) {
    if (request.nextUrl.pathname.includes("/login")) {
      try {
        await jwtVerify(jwt, new TextEncoder().encode("reypatocarlo1313"));
        return NextResponse.redirect(new URL("/products", request.url));
      } catch (error) {
        return NextResponse.next();
      }
    }
  }

  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("reypatocarlo1313")
    );
    console.log({ payload });
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/account/:path*",
    "/products/:path*",
    "/cart/:path*",
  ],
};
