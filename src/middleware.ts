import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const jwt = await getToken({ req });
  const { pathname } = req.nextUrl;

  // ✅ لو المستخدم عامل login وحاول يدخل /login
  if (jwt && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ لو المستخدم مش عامل login وحاول يدخل صفحة محمية
  if (!jwt && pathname !== "/login" && pathname !== "/register") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/Brand", "/categories", "/products", "/cart:path*", "/wishlist", "/login",'/productDetails:path*'],
};
