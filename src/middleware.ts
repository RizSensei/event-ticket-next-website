import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const authPages = ["/auth/login", "/auth/register"];
  const profilePages = [
    "/profile",
    "/profile/myTickets",
    "/profile/favourites",
  ];

  // If authenticated and trying to access auth pages, redirect to home
  if (token && authPages.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If not authenticated and trying to access profile pages, redirect to login
  if (!token && profilePages.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/login",
    "/auth/register",
    "/profile",
    "/profile/myTickets",
    "/profile/favourites",
  ],
};
